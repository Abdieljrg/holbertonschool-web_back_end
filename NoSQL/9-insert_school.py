#!/usr/bin/env python3
"""inserting new document in function"""


def insert_school(mongo_collection, **kwargs):
    """inserts new document on collection using kwargs"""

    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
