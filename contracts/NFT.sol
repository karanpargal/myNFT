//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract myNFt is ERC721{
    constructor() ERC721("myNFT","KPN"){
        _mint(msg.sender,1);
    }
}
