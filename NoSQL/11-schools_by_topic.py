#!/usr/bin/env python3
"""function returns a list"""


def schools_by_topic(mongo_collection, topic):
    """
    function returns list of school with specific
    topic
    """
    specific_topic_list = mongo_collection.find({ "topics": topic })

    return list(specific_topic_list)
