#!/usr/bin/env python3
"""pagination helper"""

def index_range(page: int, page_size: int) -> tuple:
    """ calculate start / end indexes for page data """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index
