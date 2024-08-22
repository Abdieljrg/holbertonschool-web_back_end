#!/usr/bin/env python3
"""async comprehention"""

import asyncio
import time
from typing import List

task_1_async = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """executes parallel four times,
    measures runtime"""
    start_time = time.time()
    tasks = [task_1_async() for _ in range(4)]
    await asyncio.gather(*tasks)
    end_time = time.time()
    return end_time - start_time
