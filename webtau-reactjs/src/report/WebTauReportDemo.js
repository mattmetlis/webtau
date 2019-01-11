/*
 * Copyright 2018 TWO SIGMA OPEN SOURCE, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'
import WebTauReport from './WebTauReport'

const steps = [
    {
        "message": [
            {
                "type": "action",
                "value": "opened"
            },
            {
                "type": "url",
                "value": "http://localhost:8180/search"
            }
        ]
    },
    {
        "message": [
            {
                "type": "error",
                "value": "failed"
            },
            {
                "type": "none",
                "value": "submitting search value \u0027search this\u0027"
            },
            {
                "type": "delimiter",
                "value": ":"
            },
            {
                "type": "error",
                "value": "can\u0027t clear as element is not found: by css #search-box. Try to wait for it to appear first."
            }
        ],
        "children": [
            {
                "message": [
                    {
                        "type": "error",
                        "value": "failed"
                    },
                    {
                        "type": "action",
                        "value": "setting value"
                    },
                    {
                        "type": "stringValue",
                        "value": "search this"
                    },
                    {
                        "type": "preposition",
                        "value": "to"
                    },
                    {
                        "type": "selectorType",
                        "value": "by css"
                    },
                    {
                        "type": "selectorValue",
                        "value": "#search-box"
                    },
                    {
                        "type": "delimiter",
                        "value": ":"
                    },
                    {
                        "type": "error",
                        "value": "can\u0027t clear as element is not found: by css #search-box. Try to wait for it to appear first."
                    }
                ],
                "children": [
                    {
                        "message": [
                            {
                                "type": "error",
                                "value": "failed"
                            },
                            {
                                "type": "action",
                                "value": "clearing"
                            },
                            {
                                "type": "selectorType",
                                "value": "by css"
                            },
                            {
                                "type": "selectorValue",
                                "value": "#search-box"
                            },
                            {
                                "type": "delimiter",
                                "value": ":"
                            },
                            {
                                "type": "error",
                                "value": "can\u0027t clear as element is not found: by css #search-box. Try to wait for it to appear first."
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const report = {
    summary: {
        total: 5,
        passed: 1,
        failed: 1,
        errored: 1,
        skipped: 2
    },

    tests: [
        {fileName: "testFile.groovy", id: "testFile.groovy-1", screenshot: "testFile.groovy-1.png", status: "Failed", steps: steps, scenario: "User opens an empty order"},
        {fileName: "testFile.groovy", id: "testFile.groovy-2", status: "Passed", steps: [], scenario: "Searching for latest orders, Searching for latest orders, Searching for latest orders, 1244, Searching for latest orders, Searching for latest orders, Searching for latest orders, 1244"},
        {fileName: "testFile.groovy", id: "testFile.groovy-3", status: "Skipped", steps: [], scenario: "Syncing operations"},
        {fileName: "anotherFile.groovy", id: "anotherFile.groovy-1", status: "Errored", steps: [], scenario: "Validation of account types"},
        {fileName: "anotherFile.groovy", id: "anotherFile.groovy-2", status: "Skipped", steps: [], scenario: "Validation of account types"}
    ]
}

export default () => <WebTauReport report={report}/>