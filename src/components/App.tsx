import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { AssemblySummary } from './AssemblySummary';
import { AssemblyIssues } from './AssemblyIssues';
import { AssemblyIssue } from './AssemblyIssue';
import { AssemblyIssueDocuments } from './AssemblyIssueDocuments';
import { AssemblyIssueSpeeches } from './AssemblyIssueSpeeches';
import { AssemblyIssueSummary } from './AssemblyIssueSummary';
import { AssemblyCongressmen } from './AssemblyCongressmen';
import { AssemblyCongressman } from './AssemblyCongressman';
import { AssembliesPage } from '../pages/AssembliesPage';
import { AssemblyPage } from '../pages/AssemblyPage';
import './App.css';

export function App() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/loggjafarthing">loggjafarthing</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loggjafarthing" element={<AssembliesPage />} />
                <Route path="/loggjafarthing/:assembly_id" element={<AssemblyPage />} >
                    <Route path="" element={<AssemblySummary />} />
                    <Route path="thingmal" element={<AssemblyIssues />} />
                    <Route path="thingmal/:type/:issue_id" element={<AssemblyIssueSummary />} >
                        <Route path="" element={<AssemblyIssueSpeeches />} />
                        <Route path="skjol" element={<AssemblyIssueDocuments />} />
                    </Route>
                    <Route path="thingmenn" element={<AssemblyCongressmen />} />
                    <Route path="thingmenn/:congressman_id" element={<AssemblyCongressman />} />
                </Route>
            </Routes>
        </>
    );
}
