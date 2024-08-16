#!/usr/bin/env python3
"""measure the runtime of wait_n."""

import time
import asyncio
from typing import Union
import importlib.util

spec = importlib.util.spec_from_file_location(
    "wait_n", "./1-concurrent_coroutines.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
wait_n = module.wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures total execution time for wait_n(n, max_delay)
    returns average time per call.
    """
    start_time = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.perf_counter()
    total_time = end_time - start_time
    return total_time / n
