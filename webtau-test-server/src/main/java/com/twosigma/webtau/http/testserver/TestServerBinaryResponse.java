/*
 * Copyright 2019 TWO SIGMA OPEN SOURCE, LLC
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

package com.twosigma.webtau.http.testserver;

import javax.servlet.http.HttpServletRequest;

public class TestServerBinaryResponse implements TestServerResponse {
    private final byte[] content;

    public TestServerBinaryResponse(byte[] content) {
        this.content = content;
    }

    @Override
    public byte[] responseBody(HttpServletRequest request) {
        return content;
    }

    @Override
    public String responseType(HttpServletRequest request) {
        return "application/octet-stream";
    }
}
