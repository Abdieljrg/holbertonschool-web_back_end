#!/usr/bin/env python3
"""async comprehention"""

import asyncio
from typing import List

task_0_function = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """async to return 10 random numbers
    using async generator"""
    return [i async for i in task_0_function()]
