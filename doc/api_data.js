define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Authorize user with a username and a password",
    "version": "1.0.0",
    "name": "Auth",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Authorization token for use it in other endpoints</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -XPOST http://127.0.0.1:5000/api/v1/auth -d\n'{ \"username\": \"user1\", \"password\": \"abcxy\"}'",
        "type": "curl"
      }
    ],
    "filename": "./Api.py",
    "groupTitle": "Authorization"
  },
  {
    "type": "delete",
    "url": "/jobs/:id",
    "title": "Cancel job execution",
    "version": "1.0.0",
    "name": "CancelJob",
    "group": "Jobs",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Job doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    },
    "filename": "./JobsResource.py",
    "groupTitle": "Jobs",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/jobs/id",
    "title": "Query job details (start time, status, end time etc.). If no job id specified, all jobs are returned",
    "version": "1.0.0",
    "name": "GetJob",
    "group": "Jobs",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit number of output jobs. Default is 10</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "job_details",
            "description": "<p>Job details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Job doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    },
    "filename": "./JobsResource.py",
    "groupTitle": "Jobs",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/token",
    "title": "Dummy endpoint, needed to quickly validate token",
    "version": "1.0.0",
    "name": "Get",
    "group": "Login",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "./TokenResource.py",
    "groupTitle": "Login",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/settings",
    "title": "Update user settings",
    "version": "1.0.0",
    "name": "Get",
    "group": "Settings",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "./SettingsResource.py",
    "groupTitle": "Settings",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/settings",
    "title": "Get user settings",
    "version": "1.0.0",
    "name": "Get",
    "group": "Settings",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "./SettingsResource.py",
    "groupTitle": "Settings",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/tags/:id",
    "title": "Delete tag",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Tags",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p>Tag doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          }
        ]
      }
    },
    "filename": "./TagsResource.py",
    "groupTitle": "Tags",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/tags/<tag_id>",
    "title": "List available tags or get specific tag details",
    "version": "1.0.0",
    "name": "Get",
    "group": "Tags",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p>Tag doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          }
        ]
      }
    },
    "filename": "./TagsResource.py",
    "groupTitle": "Tags",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/tags/:id",
    "title": "Update tag",
    "version": "1.0.0",
    "name": "Post",
    "group": "Tags",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          }
        ]
      }
    },
    "filename": "./TagsResource.py",
    "groupTitle": "Tags",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/tm",
    "title": "Add new translation memory unit",
    "version": "1.0.0",
    "name": "Add",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stext",
            "description": "<p>Source segment text.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ttext",
            "description": "<p>Target segment text..</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slang",
            "description": "<p>Source language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tlang",
            "description": "<p>Target language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "smeta",
            "description": "<p>Source metadata (JSON).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tmeta",
            "description": "<p>Target metadata (JSON).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>Translation unit tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "file_name",
            "description": "<p>File name (or source name)</p>"
          }
        ]
      }
    },
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/tm/clean",
    "title": "Apply cleaning rules at given segments",
    "version": "1.0.0",
    "name": "Clean",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slang",
            "description": "<p>Source language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tlang",
            "description": "<p>Target language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "file_name",
            "description": "<p>Filter segments by filename(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "organization",
            "description": "<p>Filter segments by organization(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>Filter segments by tag(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "industry",
            "description": "<p>Filter segments by industry(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language",
            "description": "<p>Filter segments by language(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Filter segments by type(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Filter segments by creator's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "tm_change_date",
            "description": "<p>Filter segments by TM change date (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "tm_creation_date",
            "description": "<p>Filter segments by TM creation date (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "insert_date",
            "description": "<p>Filter segments by date of insertion into DB (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "update_date",
            "description": "<p>Filter segments by date of update in DB  (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_date",
            "description": "<p>Filter segments by script check (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dirty_score",
            "description": "<p>Filter segments by clean score (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "squery",
            "description": "<p>Filter source segments by this query. Supports regular expressions.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tquery",
            "description": "<p>Filter target segments by this query. Supports regular expressions.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit number of exported segments.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "duplicates_only",
            "description": "<p>Return duplicate segments only (duplicates = having the same source text)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "FilterExample",
          "content": "{\n\"tm_change_date.from\" : \"20160414\",\n\"tm_change_date.to\" :\"20160822\",\n\"check_date.to\": \"20160530\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_id",
            "description": "<p>ID of maintenance task invoked in the background</p>"
          }
        ]
      }
    },
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/tm",
    "title": "Delete translation memory segments from DB",
    "version": "1.0.0",
    "name": "Delete",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -G \"http://127.0.0.1:5000/api/v1/tm?slang=en&tlang=es&file_name=test.tmx\"\n-X DELETE\n-H 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NjQ2MTU0NDUsImlkZW50aXR5IjoxLCJleHAiOjE0NjQ3MDE4NDUsIm5iZiI6MTQ2NDYxNTQ0NX0.j_p4a-NUG-6zu3Zh4_d1d0C5fkiTy-eJcVyyT1z2IfU'",
        "type": "curl"
      }
    ],
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slang",
            "description": "<p>Source language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tlang",
            "description": "<p>Target language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "squery",
            "description": "<p>Filter source segments by this query. Supports regular expressions.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tquery",
            "description": "<p>Filter target segments by this query. Supports regular expressions.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit number of exported segments.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "duplicates_only",
            "description": "<p>Return duplicate segments only (duplicates = having the same source text)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "file_name",
            "description": "<p>Filter segments by filename(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "organization",
            "description": "<p>Filter segments by organization(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>Filter segments by tag(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "industry",
            "description": "<p>Filter segments by industry(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language",
            "description": "<p>Filter segments by language(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Filter segments by type(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Filter segments by creator's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "tm_change_date",
            "description": "<p>Filter segments by TM change date (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "tm_creation_date",
            "description": "<p>Filter segments by TM creation date (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "insert_date",
            "description": "<p>Filter segments by date of insertion into DB (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "update_date",
            "description": "<p>Filter segments by date of update in DB  (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_date",
            "description": "<p>Filter segments by script check (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dirty_score",
            "description": "<p>Filter segments by clean score (.from and .to limits).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "FilterExample",
          "content": "{\n\"tm_change_date.from\" : \"20160414\",\n\"tm_change_date.to\" :\"20160822\",\n\"check_date.to\": \"20160530\" }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/tm/export/file/:export_id",
    "title": "Delete exported file",
    "version": "1.0.0",
    "name": "DeleteExportFile",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "user"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -XDELETE \"http://127.0.0.1:5000/api/v1/tm/export/files/4235-45454-34343-43434\"\n-H 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NjQ2MTU0NDUsImlkZW50aXR5IjoxLCJleHAiOjE0NjQ3MDE4NDUsIm5iZiI6MTQ2NDYxNTQ0NX0.j_p4a-NUG-6zu3Zh4_d1d0C5fkiTy-eJcVyyT1z2IfU' -X GET",
        "type": "curl"
      }
    ],
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/tm/export",
    "title": "Export translation memory segments to zipped TMX file(s)",
    "version": "1.0.0",
    "name": "Export",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_id",
            "description": "<p>ID of export task invoked in the background</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -XPOST \"http://127.0.0.1:5000/api/v1/tm/export?slang=en&tlang=es&insert_date.from=20120122&tm_creation_date.to=20090915\"\n-H 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NjQ2MTU0NDUsImlkZW50aXR5IjoxLCJleHAiOjE0NjQ3MDE4NDUsIm5iZiI6MTQ2NDYxNTQ0NX0.j_p4a-NUG-6zu3Zh4_d1d0C5fkiTy-eJcVyyT1z2IfU' -X GET",
        "type": "curl"
      }
    ],
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slang",
            "description": "<p>Source language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tlang",
            "description": "<p>Target language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "squery",
            "description": "<p>Filter source segments by this query. Supports regular expressions.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tquery",
            "description": "<p>Filter target segments by this query. Supports regular expressions.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit number of exported segments.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "duplicates_only",
            "description": "<p>Return duplicate segments only (duplicates = having the same source text)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "file_name",
            "description": "<p>Filter segments by filename(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "organization",
            "description": "<p>Filter segments by organization(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>Filter segments by tag(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "industry",
            "description": "<p>Filter segments by industry(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language",
            "description": "<p>Filter segments by language(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Filter segments by type(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Filter segments by creator's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "tm_change_date",
            "description": "<p>Filter segments by TM change date (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "tm_creation_date",
            "description": "<p>Filter segments by TM creation date (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "insert_date",
            "description": "<p>Filter segments by date of insertion into DB (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "update_date",
            "description": "<p>Filter segments by date of update in DB  (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_date",
            "description": "<p>Filter segments by script check (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dirty_score",
            "description": "<p>Filter segments by clean score (.from and .to limits).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "FilterExample",
          "content": "{\n\"tm_change_date.from\" : \"20160414\",\n\"tm_change_date.to\" :\"20160822\",\n\"check_date.to\": \"20160530\" }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/tm/export/file/<export_id>",
    "title": "Download exported file or list all available downloads",
    "version": "1.0.0",
    "name": "ExportFile",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "binary",
            "description": "<p>Content of zipped TMX file(s) (if export_id is supplied)</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "files",
            "description": "<p>List of all available exports (if export_id is not supplied)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -G \"http://127.0.0.1:5000/api/v1/tm/export/files/4235-45454-34343-43434\"\n-H 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NjQ2MTU0NDUsImlkZW50aXR5IjoxLCJleHAiOjE0NjQ3MDE4NDUsIm5iZiI6MTQ2NDYxNTQ0NX0.j_p4a-NUG-6zu3Zh4_d1d0C5fkiTy-eJcVyyT1z2IfU' -X GET",
        "type": "curl"
      }
    ],
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/tm/generate",
    "title": "Generate translation memory segments from existing pairs using pivot language",
    "version": "1.0.0",
    "name": "Generate",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slang",
            "description": "<p>Source language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tlang",
            "description": "<p>Target language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "plang",
            "description": "<p>Pivot language. If not provided, ActivaTM will try to identify best pivot language automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>Generate segments only for given tag(s)</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": true,
            "field": "force",
            "defaultValue": "false",
            "description": "<p>Force segment generation even if requested language pair + tag exist in DB</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "\ncurl -G \"http://127.0.0.1:5000/api/v1/tm/generate?tag=Automotive&slang=de&tlang=fr&plang=en\"\n-X PUT -H 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NjQ2MTU0NDUsImlkZW50aXR5IjoxLCJleHAiOjE0NjQ3MDE4NDUsIm5iZiI6MTQ2NDYxNTQ0NX0.j_p4a-NUG-6zu3Zh4_d1d0C5fkiTy-eJcVyyT1z2IfU'",
        "type": "curl"
      }
    ],
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/tm/import",
    "title": "Import translation memory segments from zipped TMX file",
    "version": "1.0.0",
    "name": "Import",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Zipped TMX file to import.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>Tag name of the imported file.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang_pair",
            "description": "<p>Language pair to import (for multilingual TMX files). 2-letter language codes join by underscore. By default, import first pair in each segment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "\ncurl -G \"http://127.0.0.1:5000/api/v1/tm/import?tag=Automotive&lang_pair=en_es\"\n -F file=@data/test.zip -X PUT\n-H 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NjQ2MTU0NDUsImlkZW50aXR5IjoxLCJleHAiOjE0NjQ3MDE4NDUsIm5iZiI6MTQ2NDYxNTQ0NX0.j_p4a-NUG-6zu3Zh4_d1d0C5fkiTy-eJcVyyT1z2IfU'",
        "type": "curl"
      }
    ],
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/tm/maintain",
    "title": "Perform various maintenance tasks on TM (POS tagging, cleaning, etc.)",
    "version": "1.0.0",
    "name": "Maintenance",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slang",
            "description": "<p>Source language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tlang",
            "description": "<p>Target language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "file_name",
            "description": "<p>Filter segments by filename(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "organization",
            "description": "<p>Filter segments by organization(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>Filter segments by tag(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "industry",
            "description": "<p>Filter segments by industry(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language",
            "description": "<p>Filter segments by language(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Filter segments by type(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Filter segments by creator's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "tm_change_date",
            "description": "<p>Filter segments by TM change date (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "tm_creation_date",
            "description": "<p>Filter segments by TM creation date (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "insert_date",
            "description": "<p>Filter segments by date of insertion into DB (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "update_date",
            "description": "<p>Filter segments by date of update in DB  (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_date",
            "description": "<p>Filter segments by script check (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dirty_score",
            "description": "<p>Filter segments by clean score (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "squery",
            "description": "<p>Filter source segments by this query. Supports regular expressions.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tquery",
            "description": "<p>Filter target segments by this query. Supports regular expressions.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit number of exported segments.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "duplicates_only",
            "description": "<p>Return duplicate segments only (duplicates = having the same source text)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "FilterExample",
          "content": "{\n\"tm_change_date.from\" : \"20160414\",\n\"tm_change_date.to\" :\"20160822\",\n\"check_date.to\": \"20160530\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_id",
            "description": "<p>ID of maintenance task invoked in the background</p>"
          }
        ]
      }
    },
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/tm/pos",
    "title": "Tag segments with POS",
    "version": "1.0.0",
    "name": "PosTagger",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slang",
            "description": "<p>Source language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tlang",
            "description": "<p>Target language.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "universal",
            "description": "<p>=False Use Universal POS tags</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "file_name",
            "description": "<p>Filter segments by filename(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "organization",
            "description": "<p>Filter segments by organization(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>Filter segments by tag(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "industry",
            "description": "<p>Filter segments by industry(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language",
            "description": "<p>Filter segments by language(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Filter segments by type(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Filter segments by creator's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "tm_change_date",
            "description": "<p>Filter segments by TM change date (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "tm_creation_date",
            "description": "<p>Filter segments by TM creation date (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "insert_date",
            "description": "<p>Filter segments by date of insertion into DB (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "update_date",
            "description": "<p>Filter segments by date of update in DB  (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_date",
            "description": "<p>Filter segments by script check (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dirty_score",
            "description": "<p>Filter segments by clean score (.from and .to limits).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "squery",
            "description": "<p>Filter source segments by this query. Supports regular expressions.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tquery",
            "description": "<p>Filter target segments by this query. Supports regular expressions.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit number of exported segments.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "duplicates_only",
            "description": "<p>Return duplicate segments only (duplicates = having the same source text)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "FilterExample",
          "content": "{\n\"tm_change_date.from\" : \"20160414\",\n\"tm_change_date.to\" :\"20160822\",\n\"check_date.to\": \"20160530\" }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "\ncurl -G \"http://127.0.0.1:5000/api/v1/tm/pos?slang=en&tlang=es\"\n-X PUT\n-H 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6ImFkbWluIiwiZXhwIjoxNDY2MDAxNzQ2LCJuYmYiOjE0NjU5MTUzNDYsImlhdCI6MTQ2NTkxNTM0Nn0.Z8Dzb_1JUr8CYBLiBVT2_9paMvRNzSs_hL9OgAx0IEQ'",
        "type": "curl"
      }
    ],
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/tm",
    "title": "Search translation memory segments",
    "version": "1.0.0",
    "name": "Query",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>String to query</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slang",
            "description": "<p>Source language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tlang",
            "description": "<p>Target language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'json'",
              "'moses'"
            ],
            "optional": true,
            "field": "out",
            "defaultValue": "json",
            "description": "<p>Output format.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Limit output to this number of segments (for json). For Moses, only one segment is output</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "min_match",
            "defaultValue": "75",
            "description": "<p>Return only match above or equal to given threshold (0-100)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "strip_tags",
            "defaultValue": "false",
            "description": "<p>Strip all XML tags from the query</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "concordance",
            "defaultValue": "false",
            "description": "<p>Concordance search mode</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "aut_trans",
            "defaultValue": "True",
            "description": "<p>Apply machine translation if match score is less than a threshold</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>Prefer given tag(s). Penalize segments from other tags</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "smeta",
            "description": "<p>Source metadata (JSON).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tmeta",
            "description": "<p>Target metadata (JSON).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'regex,tags,posTag,split'",
              "'None'"
            ],
            "optional": true,
            "field": "operation_match",
            "defaultValue": "regex,tags,posTag,split",
            "description": "<p>Operation to match. If None only editdistace is calculated</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String/Json",
            "optional": false,
            "field": "Translation",
            "description": "<p>units matching the query</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -G \"http://127.0.0.1:5000/api/v1/tm?q=English+skills\"\n-X GET\n-H 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0NjQ2MTU0NDUsImlkZW50aXR5IjoxLCJleHAiOjE0NjQ3MDE4NDUsIm5iZiI6MTQ2NDYxNTQ0NX0.j_p4a-NUG-6zu3Zh4_d1d0C5fkiTy-eJcVyyT1z2IfU'",
        "type": "curl"
      }
    ],
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/tm/query_batch",
    "title": "Search translation memory segments",
    "version": "1.0.0",
    "name": "QueryBatch",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>String to query (multiple values allowed)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slang",
            "description": "<p>Source language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tlang",
            "description": "<p>Target language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "smeta",
            "description": "<p>Source metadata (JSON).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tmeta",
            "description": "<p>Target metadata (JSON).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'json'",
              "'moses'"
            ],
            "optional": true,
            "field": "out",
            "defaultValue": "json",
            "description": "<p>Output format.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Limit output to this number of segments (for json). For Moses, only one segment is output</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "min_match",
            "defaultValue": "75",
            "description": "<p>Return only match above or equal to given threshold (0-100)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "strip_tags",
            "defaultValue": "false",
            "description": "<p>Strip all XML tags from the query</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "concordance",
            "defaultValue": "false",
            "description": "<p>Concordance search mode</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "aut_trans",
            "defaultValue": "True",
            "description": "<p>Applied machine translation if there aren't match</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>Prefer given tag(s). Penalize segments from other tags</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "split_pattern",
            "description": "<p>Enable splitting of query to multiple queries by using this pattern (see https://docs.python.org/3/library/stdtypes.html#str.split)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'regex,tags,posTag,split'",
              "'None'"
            ],
            "optional": true,
            "field": "operation_match",
            "defaultValue": "regex,tags,posTag,split",
            "description": "<p>Operation to match. If None only editdistace is calculated</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String/Json",
            "optional": false,
            "field": "Translation",
            "description": "<p>units matching the query</p>"
          }
        ]
      }
    },
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/tm/stats",
    "title": "Return various statistics & allowed language pairs",
    "version": "1.0.0",
    "name": "Stats",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "stats",
            "description": "<p>Various stats</p>"
          }
        ]
      }
    },
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/tm/stats/usage",
    "title": "Return various usage statistics",
    "version": "1.0.0",
    "name": "Stats",
    "group": "TranslationMemory",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "stats",
            "description": "<p>Various stats</p>"
          }
        ]
      }
    },
    "filename": "./TmResource.py",
    "groupTitle": "TranslationMemory",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users/<username>/scopes",
    "title": "Add/update user scope",
    "version": "1.0.0",
    "name": "AddUpdate",
    "group": "UserScopes",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>Scope id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang_pairs",
            "description": "<p>List (separated with comma) of allowed language pairs to query, ex.: en_es,es_en,es_fr. By default, allows all pairs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tags",
            "description": "<p>List (separated with comma) of allowed tags to query, ex.: Health,Insurance. By default, allows all tags</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "can_update",
            "description": "<p>Allow/forbid update TM in the given scope. Default is false.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "can_import",
            "description": "<p>Allow/forbid import of TM in the given scope. Default is false.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "can_export",
            "description": "<p>Allow/forbid export of TM in the given scope. Default is false.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "usage_limit",
            "description": "<p>Limit allowed usage (queries number). Default: no limit</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "start_date",
            "description": "<p>Scope starts at that date. Default - not limited</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "end_date",
            "description": "<p>Scope ends at that date. Default - not limited</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p>User doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          }
        ]
      }
    },
    "filename": "./UsersResource.py",
    "groupTitle": "UserScopes",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/users/<username>/scope",
    "title": "Delete scope",
    "version": "1.0.0",
    "name": "Delete",
    "group": "UserScopes",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Scope id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p>User doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          }
        ]
      }
    },
    "filename": "./UsersResource.py",
    "groupTitle": "UserScopes",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users/<username>",
    "title": "Add/update user details",
    "version": "1.0.0",
    "name": "AddUpdate",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role: admin or user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          }
        ]
      }
    },
    "filename": "./UsersResource.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/users/<username>",
    "title": "Delete user",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role: admin or user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p>User doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          }
        ]
      }
    },
    "filename": "./UsersResource.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/<username>",
    "title": "Get user details. If no user specified, all users' details are returned",
    "version": "1.0.0",
    "name": "Get",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p>User doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    },
    "filename": "./UsersResource.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/<username>/scopes",
    "title": "Get user scopes",
    "version": "1.0.0",
    "name": "Get",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p>User doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "401",
            "description": "<p>Unathorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "403",
            "description": "<p>Insufficient permissions</p>"
          }
        ]
      }
    },
    "filename": "./UsersResource.py",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned by auth endpoint.</p>"
          }
        ]
      }
    }
  }
] });