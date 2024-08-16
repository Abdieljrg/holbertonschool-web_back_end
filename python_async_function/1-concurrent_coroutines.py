#!/usr/bin/env python3
"""asynchronous routine, spawns multiple wait_random coroutines."""

import asyncio
from typing import List
import importlib.util

spec = importlib.util.spec_from_file_location(
    "wait_random", "./0-basic_async_syntax.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
wait_random = module.wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with specified max_delay
    and returns list of delays.
    """
    delays = []
    for _ in range(n):
        delays.append(asyncio.create_task(wait_random(max_delay)))

    completed_delays = []
    for task in asyncio.as_completed(delays):
        completed_delays.append(await task)

    return completed_delays
