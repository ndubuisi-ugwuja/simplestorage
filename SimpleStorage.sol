// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleStorage {
    // Variable types:
    //int256 smallNumber = -25;
    //uint256 bigNumber = 206000000000;
    //bool isBigNumber = true;
    //address ethAddress = 0xE52dc264F1F744202E02663bdE05621268885bBf;
    //string myName = 'Ndubuisi Ugwuja';

    uint256 public bigNumber; //This gets assigned to 0 by default
    struct People {
        uint256 bigNumber;
        string name;
    }

    People[] public people;
    mapping(string => uint256) public nameToBigNumber;

    function addPerson(uint256 _bigNumber, string memory _name) public {
        people.push(People(_bigNumber, _name));
        nameToBigNumber[_name] = _bigNumber;
    }

    function store(uint256 _bigNumber) public virtual {
        bigNumber = _bigNumber;
    }

    function retrieve() public view returns (uint256) {
        return bigNumber;
    }

    function retrievePerson(
        uint256 _index
    ) public view returns (uint256, string memory) {
        People storage person = people[_index];
        return (person.bigNumber, person.name);
    }
}
