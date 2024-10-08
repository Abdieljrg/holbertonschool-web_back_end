#!/usr/bin/env python3
"""function, call other function"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """function returns float of the func inside"""
    def multiplier_function(x: float) -> float:
        """returns x * mul.... in float"""
        return x * multiplier
    return multiplier_function
