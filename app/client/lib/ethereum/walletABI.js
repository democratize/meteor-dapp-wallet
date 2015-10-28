Session.setDefault('network', false);

// MAIN-NET CONTRACT ADDRESS
var mainNetAddress = '0x273930d21e01ee25e4c219b63259d214872220a2';
var testNetAddress = '0x1d649ca03d1bcd84877482c1dd8d3f9a7398728f'; // morden testnet

var walletABI = [{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_lastDay","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_spentToday","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"_r","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ConfirmationNeeded","type":"event"}];
WalletContract = web3.eth.contract(walletABI);

walletABICompiled = '0x60606040526002610108600050556040516110e53803806110e583398101604052805160805160a051919092019190808383815160019081018155600090600160a060020a0332169060029060038390559183525061010260205260408220555b82518110156100eb57828181518110156100025790602001906020020151600160a060020a03166002600050826002016101008110156100025790900160005081905550806002016101026000506000858481518110156100025790602001906020020151600160a060020a0316815260200190815260200160002060005081905550600101610060565b81600060005081905550505050806101056000508190555061010f62015180420490565b6101075550505050610fbf806101266000396000f300606060405236156100da5760e060020a6000350463173825d9811461012c5780632f54bf6e146101875780634123cb6b146101af57806352375093146101b857806354fd4d50146101c25780635c52c2f5146101cc578063659010e7146101fd5780637065cb4814610207578063746c91711461023b578063797af62714610244578063b20d30a914610257578063b61d27f61461028b578063b75c7dc6146102ac578063ba51a6df146102db578063c2cf73261461030f578063cbf0b0c01461034d578063f00d4b5d14610381578063f1736d86146103ba575b6103c4600034111561012a5760408051600160a060020a033216815234602082015281517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c929181900390910190a15b565b6103c46004356000600036436040518084848082843750505090910190815260405190819003602001902090506106c9815b600160a060020a03321660009081526101026020526040812054818082811415610c3f57610d97565b6103c66004355b600160a060020a03811660009081526101026020526040812054115b919050565b6103c660015481565b6103c66101075481565b6103c66101085481565b6103c46000364360405180848480828437505050909101908152604051908190036020019020905061081a8161015e565b6103c66101065481565b6103c4600435600036436040518084848082843750505090910190815260405190819003602001902090506106418161015e565b6103c660005481565b6103c66004355b600081610a7d8161015e565b6103c46004356000364360405180848480828437505050909101908152604051908190036020019020905061080e8161015e565b6103c66004803590602480359160443591820191013560006108393261018e565b6103c4600435600160a060020a033216600090815261010260205260408120549080828114156103d857610457565b6103c4600435600036436040518084848082843750505090910190815260405190819003602001902090506107888161015e565b6103c6600435602435600082815261010360209081526040808320600160a060020a038516845261010290925282205482818114156107e157610805565b6103c4600435600036436040518084848082843750505090910190815260405190819003602001902090506108288161015e565b6103c46004356024356000600036436040518084848082843750505090910190815260405190819003602001902090506104e28161015e565b6103c66101055481565b005b60408051918252519081900360200190f35b50506000828152610103602052604081206001810154600284900a9290831611156104575780546001828101805492909101835590839003905560408051600160a060020a03321681526020810186905281517fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b929181900390910190a15b50505050565b600160a060020a03831660028361010081101561000257508301819055600160a060020a03851660008181526101026020908152604080832083905584835291829020869055815192835282019290925281517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c929181900390910190a1505b505050565b15610457576104f08361018e565b156104fb57506104dd565b600160a060020a03841660009081526101026020526040812054925082141561052457506104dd565b61045d5b6101045460005b81811015610ee457610104805461010991600091849081101561000257600080516020610f9f83398151915201548252506020918252604081208054600160a060020a0319168155600181018290556002810180548382559083528383209193610f6992601f9290920104810190610a65565b60018054810190819055600160a060020a038316906002906101008110156100025790900160005081905550600160005054610102600050600084600160a060020a03168152602001908152602001600020600050819055507f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3826040518082600160a060020a0316815260200191505060405180910390a15b505b50565b1561063c5761064f8261018e565b1561065a575061063e565b610662610528565b60015460fa90106106775761067561068c565b505b60015460fa90106105a2575061063e565b6107465b600060015b600154811015610a79575b600154811080156106bc5750600281610100811015610002570154600014155b15610d9f5760010161069c565b156104dd57600160a060020a0383166000908152610102602052604081205492508214156106f7575061063c565b6001600160005054036000600050541115610712575061063c565b600060028361010081101561000257508301819055600160a060020a03841681526101026020526040812055610688610528565b5060408051600160a060020a038516815290517f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da9181900360200190a1505050565b1561063c5760015482111561079d575061063e565b60008290556107aa610528565b6040805183815290517facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da9181900360200190a15050565b506001820154600282900a908116600014156108005760009350610805565b600193505b50505092915050565b1561063c575061010555565b1561063e5760006101065550565b1561063c5781600160a060020a0316ff5b15610a555761084d846000610e793261018e565b15610909577f92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd00432858786866040518086600160a060020a0316815260200185815260200184600160a060020a031681526020018060200182810382528484828181526020019250808284378201915050965050505050505060405180910390a184600160a060020a03168484846040518083838082843750505090810191506000908083038185876185025a03f15060009350610a5592505050565b6000364360405180848480828437505050909101908152604051908190036020019020915061093990508161024b565b15801561095c575060008181526101096020526040812054600160a060020a0316145b15610a555760008181526101096020908152604082208054600160a060020a03191688178155600181018790556002018054858255818452928290209092601f01919091048101908490868215610a5d579182015b82811115610a5d5782358260005055916020019190600101906109b1565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf328132868887876040518087815260200186600160a060020a0316815260200185815260200184600160a060020a03168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a15b949350505050565b506109cf9291505b80821115610a795760008155600101610a65565b5090565b15610c2c5760008381526101096020526040812054600160a060020a031614610c2c5760408051600091909120805460018201546002929092018054600160a060020a0392909216939091819083908015610afd57820191906000526020600020905b815481529060010190602001808311610ae057829003601f168201915b505091505060006040518083038185876185025a03f150505060008481526101096020908152604080519281902080546001820154600160a060020a033281811688529587018b905293860181905292166060850181905260a06080860181815260029390930180549187018290527fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a975094958a959293909160c083019084908015610bcf57820191906000526020600020905b815481529060010190602001808311610bb257829003601f168201915b5050965050505050505060405180910390a160008381526101096020908152604082208054600160a060020a031916815560018101839055600281018054848255908452828420919392610c3292601f9290920104810190610a65565b50919050565b50505060019150506101aa565b60008581526101036020526040812080549093501415610cc7576000805483556001838101919091556101048054918201808255828015829011610c9657818360005260206000209182019101610c969190610a65565b50505060028301819055610104805487929081101561000257600091909152600080516020610f9f83398151915201555b506001810154600283900a90811660001415610d975760408051600160a060020a03321681526020810187905281517fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda929181900390910190a1815460019011610d84576000858152610103602052604090206002015461010480549091908110156100025760406000908120600080516020610f9f8339815191529290920181905580825560018083018290556002909201559450610d979050565b8154600019018255600182018054821790555b505050919050565b5b60018054118015610dc257506001546002906101008110156100025701546000145b15610dd65760018054600019019055610da0565b60015481108015610df95750600154600290610100811015610002570154600014155b8015610e1357506002816101008110156100025701546000145b15610e7457600154600290610100811015610002578101549082610100811015610002578101919091558190610102906000908361010081101561000257810154825260209290925260408120929092556001546101008110156100025701555b610691565b156101aa5761010754610e8f5b62015180420490565b1115610ea857600061010655610ea3610e86565b610107555b6101065480830110801590610ec65750610106546101055490830111155b15610edc575061010680548201905560016101aa565b5060006101aa565b61063c6101045460005b81811015610f745761010480548290811015610002576000918252600080516020610f9f833981519152015414610f6157610104805461010391600091849081101561000257600080516020610f9f83398151915201548252506020919091526040812081815560018101829055600201555b600101610eee565b50505060010161052f565b61010480546000808355919091526104dd90600080516020610f9f83398151915290810190610a6556004c0be60200faa20559308cb7b5a1bb3255c16cb1cab91f525b5ae7a03d02fabe';
walletStubABICompiled = '0x606060405260026101086000505560405161015638038061015683398101604052805160805160a051919092019190808383815160019081018155600090600160a060020a0332169060029060038390559183525061010260205260408220555b82518110156100eb57828181518110156100025790602001906020020151600160a060020a03166002600050826002016101008110156100025790900160005081905550806002016101026000506000858481518110156100025790602001906020020151600160a060020a0316815260200190815260200160002060005081905550600101610060565b81600060005081905550505050806101056000508190555061010f62015180420490565b61010755505050506031806101256000396000f3003660008037602060003660003473cafecafecafecafecafecafecafecafecafecafe61235a5a03f21560015760206000f3';
originalContractAddress = mainNetAddress;

// CONTRACT VERSIONS
contractVersions = [
    // 0 foundation
    {
        original: '971ac1efe62de02ab7497cf2cad2b93ce990a8d11c3a544943baf807e42eab7d',
        stub: false,
        // version 0 with tx.origin
        address: '0x4efc6389b88569a375668b7b3bd4a9b6c8f4a942'
    },
    // 1 better daily limit
    { 
        original: '8207780d6fb31803373aff97360562231187ebb0da6b4678eeb68ceb16897509',
        stub: '',
        address: '0x273930d21e01ee25e4c219b63259d214872220a2'
    }
];




/**
Replaces the address in the stub code "walletStubABICompiled" variable.

@method replaceStubAddress
*/
var replaceStubAddress = function(address) {
    walletStubABICompiled = walletStubABICompiled.replace('cafecafecafecafecafecafecafecafecafecafe', address.replace('0x',''));
    // set this address as used address
    originalContractAddress = address;
    return walletStubABICompiled;
};

/**
Deploys testnet wallet, when on other orig wallet was found

@method deployTestnetWallet
*/
var deployTestnetWallet = function() {
    var account = web3.eth.accounts[0];

    EthElements.Modal.question({
        text: new Spacebars.SafeString(TAPi18n.__('wallet.modals.testnetWallet.walletNeedsDeployment', {account: account})),
        cancel: true,
        ok: function() {

            // show loading
            EthElements.Modal.show('views_modals_loading', {closeable: false});

            // deploy testnet wallet
            WalletContract.new([],'','', {
                from: account,
                data: walletABICompiled,
                gas: 2000000,
            }, function (e, contract) {
                if(!e) {
                    if(contract.address) {
                        console.log('Contract created at: ', contract.address);

                        LocalStore.set('ethereum_testnetWalletContractAddress', contract.address);
                        replaceStubAddress(contract.address);

                        EthElements.Modal.question({
                            text: new Spacebars.SafeString(TAPi18n.__('wallet.modals.testnetWallet.testnetWalletDeployed', {address: contract.address})),
                            ok: true
                        });

                    } else {
                        console.log('Contract creation transaction hash: ', contract.transactionHash);
                    }

                } else {
                    GlobalNotification.error({
                        content: e.message,
                        duration: 8
                    });

                    EthElements.Modal.hide();
                }
            });
        }
    },{
        closeable: false
    });

}

/**
Checks the main and testnet address

@method checkCodeOnAddress
*/
var checkCodeOnAddress = function(address, callback) {
    // see if the original wallet is deployed, if not re-deploy on testnet
    web3.eth.getCode(address, function(e, code) {
        if(!e) {
            if(code.length > 2) {
                replaceStubAddress(address);

                if(address === mainNetAddress) {
                    console.log('Use Main-net wallet as code base for stubs on address: ', address);
                    Session.set('network', 'mainnet');
                }
                if(address === testNetAddress) {
                    console.log('Use Test-net wallet as code base for stubs on address: ', address);
                    Session.set('network', 'testnet');
                }
            
            // use testnet or private net address, or re-deploy
            } else {

                callback();                
            }
        } else {
            GlobalNotification.error({
                content: e.message,
                duration: 8
            });
        }
    });
}


/**
Checks if the original wallet exists, if not deploys it

@method checkForOriginalWallet
*/
checkForOriginalWallet = function() {
    // see if the original wallet is deployed, if not re-deploy on testnet
    checkCodeOnAddress(mainNetAddress, function() {
        checkCodeOnAddress(testNetAddress, function() {
            var privateNetAddress = LocalStore.get('ethereum_testnetWalletContractAddress');

            if(privateNetAddress)
                web3.eth.getCode(privateNetAddress, function(e, code) {
                    if(!e) {
                        if(code.length > 2) {
                            replaceStubAddress(privateNetAddress);
                            console.log('Use private-net wallet as code base for stubs on address: ', privateNetAddress);
                            Session.set('network', 'privatenet');
                        } else
                            deployTestnetWallet();
                    } else {
                        GlobalNotification.error({
                            content: e.message,
                            duration: 8
                        });
                    }
                });
            else
                deployTestnetWallet();
        });
    });
}

