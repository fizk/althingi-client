import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { DocumentType } from '../index.d';
import { Spinner } from '../items/Spinner';
import { DocumentCard } from '../items/DocumentCard';
import { Card } from '../items/Card';
import { ErrorMessage } from '../items/ErrorMessage';
import './AssemblyIssueDocuments.css';

const ASSEMBLY_ISSUE_DOCUMENTS_QUERY = gql`
query ($assembly: ID!, $issue: ID!, $category: IssueCategory!){
    AssemblyIssueDocuments(assembly: $assembly, issue:$issue, category: $category) {
        ... document
    }
}

fragment document on Document {
    id
    assembly {id}
    issue {id}
    date
    url
    type
}
`;

export function AssemblyIssueDocuments () {
    const { assembly_id, issue_id, category} = useParams();
    const { loading, error, data } = useQuery<{
        AssemblyIssueDocuments: Array<DocumentType>,
    }>(
        ASSEMBLY_ISSUE_DOCUMENTS_QUERY,
        { variables: { assembly: assembly_id, issue: issue_id, category: category?.toUpperCase() } }
    );

    if (loading) return <Spinner />;
    if (error) return <ErrorMessage error={error} />;

    return (
        <ul className="assembly-issue-documents__list">
            {data?.AssemblyIssueDocuments.map(document => (
                <li key={document.id} className="assembly-issue-documents__list-item">
                    <Card>
                        <DocumentCard document={document} />
                    </Card>
                </li>
            ))}
        </ul>
    )
}
