const { MerkleTree } = require('merkletreejs')
// const SHA256 = require('crypto-js/sha256')
const keccak256 = require('keccak256')

const leaves = ["0x0685251F5D0C1079A1913769738DC7F62A418670",
"0x9953f872b2d50b000e23228988D7Ee60E2B71BAD",
"0x9959CD49BaC1f606D4a7f1583f8163a7C86B4F62",
"0x4D1BC8e1aB42069bDf0018a571A31dFB1C77E3Dd",
"0x49E4dBAA3A90c7876886fDbb5ef2a8f255339124",
"0x8b02f3408a7883bAC5967BB9a9FA3bE7626812Ee",
"0xd6Bd39b0c141C6A0f0006A06C27E6d69FbDcf19D",
"0xC2EF0703106D86F31c97A99c4b72Ba3d42e93943",
"0xEb312ac6fcaCD930975F87F69B6F694602055242",
"0x8BaDC356C46EBe19658015fC7fb591B814E892D7",
"0x07212035E3f2BcEe65d446f72C50c767D5e407DB",
"0xF364566937D95D02F8E016738a2F8843241Db8BA",
"0xfCC950c567E9504f7D04d7D98c99fb17db9C1c32",
"0x461E04EA56C5b067E4423425Ed8CB95dd52899a4",
"0xcD2e7f0051c394029464248923Cd0C32860f9576",
"0xA8dcCF4CAFe321882F1aB5F3683b56b6842bC1B0",
"0xD8DAFE4d87420F2f5db05a2Fbc726bb29cCf5777",
"0x4D44e5d51F0FBE39a0eb4497f3DCAD91D2B993a7",
"0x8bBF17d5B4e2F9E569a53c63fA64E61adA863507",
"0xF17B16c69Be7475cb773A41AA41BB9ea362A2Ad5",].map(x => keccak256(x))

const tree = new MerkleTree(leaves, keccak256, {sortPairs:true})

const root = tree.getHexRoot()
const leaf = (keccak256('0x461E04EA56C5b067E4423425Ed8CB95dd52899a4')).toString('hex')
const proof = tree.getHexProof(leaf)

// console.log(tree.verify(proof, leaf, root)) // true
console.log(proof,root,leaf)
console.log(tree.verify(proof, leaf, root)) // true



//addresses = ["0x0685251F5D0C1079A1913769738DC7F62A418670",
//     "0x9953f872b2d50b000e23228988D7Ee60E2B71BAD",
//     "0x9959CD49BaC1f606D4a7f1583f8163a7C86B4F62",
//     "0x4D1BC8e1aB42069bDf0018a571A31dFB1C77E3Dd",
//     "0x49E4dBAA3A90c7876886fDbb5ef2a8f255339124",
//     "0x8b02f3408a7883bAC5967BB9a9FA3bE7626812Ee",
//     "0xd6Bd39b0c141C6A0f0006A06C27E6d69FbDcf19D",
//     "0xC2EF0703106D86F31c97A99c4b72Ba3d42e93943",
//     "0xEb312ac6fcaCD930975F87F69B6F694602055242",
//     "0x8BaDC356C46EBe19658015fC7fb591B814E892D7",
//     "0x07212035E3f2BcEe65d446f72C50c767D5e407DB",
//     "0xF364566937D95D02F8E016738a2F8843241Db8BA",
//     "0xfCC950c567E9504f7D04d7D98c99fb17db9C1c32",
//     "0x461E04EA56C5b067E4423425Ed8CB95dd52899a4",
//     "0xcD2e7f0051c394029464248923Cd0C32860f9576",
//     "0xA8dcCF4CAFe321882F1aB5F3683b56b6842bC1B0",
//     "0xD8DAFE4d87420F2f5db05a2Fbc726bb29cCf5777",
//     "0x4D44e5d51F0FBE39a0eb4497f3DCAD91D2B993a7",
//     "0x8bBF17d5B4e2F9E569a53c63fA64E61adA863507",
//     "0xF17B16c69Be7475cb773A41AA41BB9ea362A2Ad5",]