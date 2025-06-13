// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    // bytes32 is more efficient for smaller messages
	bytes32 public msg1 = "Hello world";

    // string is more efficient for longer messages (>32 bytes)
    string public msg2 = "Hello world, this is Soham with blockchain";
}

