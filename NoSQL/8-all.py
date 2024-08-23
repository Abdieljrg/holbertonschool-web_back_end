#!/usr/bin/env python3
"""function that list all documents"""


def list_all(mongo_collection):
    """list all documents"""

    lst_all = mongo_collection.find()

    return list(lst_all)
