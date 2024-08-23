#!/usr/bin/env python3
"""function, changes school topic"""


def update_topics(mongo_collection, name, topics):
    """updates topic"""
    return mongo_collection.update_many(
        { "name": name },
        { "$set": { "topics": topics }}
    )
