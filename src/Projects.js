import React from 'react'



function Projects() {

    function openSiteDemo() {
        const url = 'https://decentralizlottery.netlify.app'
        window.open(url)
    }

    function openSiteCode() {
        const url = 'https://github.com/Michealleverton/DecentralizLottery'
        window.open(url)
    }

    function openFaucet() {
        const url = 'https://ltt-faucet.netlify.app/'
        window.open(url)
    }

    function openAdminDemo() {
        const url = 'https://lottoadmin.netlify.app/'
        window.open(url)
    }

    function openAdminCode() {
        const url = 'https://github.com/Michealleverton/lottoadminv1'
        window.open(url)
    }

    function openODcontract() {
        const url = 'https://goerli.etherscan.io/address/0x31cf2b41083003a66a2d10724956014d398d51f0#code'
        window.open(url)
    }
    
    function openTDcontract() {
        const url = 'https://goerli.etherscan.io/address/0xecc5eed8054f0a75118619203760d28d1a85b4e5#code'
        window.open(url)
    }

    function openFFcontract() {
        const url = 'https://goerli.etherscan.io/address/0xb954343f87e77b5e846446bb1167c1e5cf35df2c#code'
        window.open(url)
    }

    function openSHIBcontract() {
        const url = 'https://goerli.etherscan.io/address/0x8d4f9403f1100deb306f598d8ba26425f9139880#code'
        window.open(url)
    }

    return (
        <section className='' id='projects'>

            <div className='card_header textwhite'>Crypto Lottery and Admin Dashboard Project</div>
            <div className='card_note textwhite'><p>To use this crypto lottery project and admin dashboard, you will have to have the Goerli test network connected in your wallet with test Goerli Eth. Due to Shiba Inu token not being in the testnet, you will have to import and use my Levy Test Token to purchase the shiba tickets. Levy Test token contract address is ( 0x8C7190802Ae13025adE069D2a11Eb9dF2F52A071 ). Lastly click the LLT Faucet button below to get some LTT (Levy Test Token) from my faucet and have some fun.</p></div>

            <div className='projects_container'>

                <div className='project_card_container' id='Links to decentraliz lottery'>
                    <div className='project_card'>
                        <div className='project_card_image1'></div>
                        <div className='project_card_text'>
                            <p className='dlhomepagetext textwhite textcenter'>This project was created to make a fully functional decentralized crypto lottery. Including special token buring draws.</p>
                        </div>
                        <div className='dlproject_btn'>
                            <form>
                                <button type="submit" onClick={() => { openSiteDemo() }} className='project_card_button'>Demo</button>
                            </form>
                            <form>
                                <button type="submit" onClick={() => { openSiteCode() }} className='project_card_button'>Code</button>
                            </form>
                        </div>
                        <div className='dlproject_btn'>
                            <form>
                                <button type="submit" onClick={() => { openFaucet() }} className='project_card_button'>LTT Faucet</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='project_card_container' id='Links to Lottery dashboard'>
                    <div className='project_card'>
                        <div className='project_card_image2'></div>
                        <div className='project_card_text textcenter'>
                            <p className='dlhomepagetext textwhite'>The second part to this project was to create a fully functional dashboard to veiw all the smart contracts data and interact with the contract like paying the winner, updating the price of the tickets, pausing ticket purchase and more.</p>
                        </div>
                        <div className='dlproject_btn'>
                            <form>
                                <button type="submit" onClick={() => { openAdminDemo() }} className='project_card_button'>Demo</button>
                            </form>
                            <form>
                                <button type="submit" onClick={() => { openAdminCode() }} className='project_card_button'>Code</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='project_card_container' id='Links to smart contracts'>
                    <div className='project_card'>
                        <div className='project_card_image3'></div>
                        <div className='project_card_text'>
                            <p className='dlhomepagetext textwhite textcenter'>Here you will find links to all the smart contracts used in this project.</p>
                        </div>
                        <div className='dlproject_btn'>
                            <form>
                                <button type="submit" onClick={() => { openODcontract() }} className='project_card_button'>One Dollar</button>
                            </form>
                            <form>
                                <button type="submit" onClick={() => { openTDcontract() }} className='project_card_button'>Two Dollar</button>
                            </form>
                        </div>
                        <div className='dlproject_btn'>
                            <form>
                                <button type="submit" onClick={() => { openFFcontract() }} className='project_card_button'>Fifty Fifty</button>
                            </form>
                            <form>
                                <button type="submit" onClick={() => { openSHIBcontract() }} className='project_card_button'>Shiba Inu</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects