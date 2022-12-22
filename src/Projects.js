import React from 'react'

function Projects() {
    return (
        <section className='' id='projects'>

            <div className='card_header textwhite'>Most Recent Project</div>
            <div className='card_note textwhite'><p>To use this project you will have to have the Goerli test network connected in your wallet with test Goerli Eth. Test Eth can be received from faucets. Due to Shiba Inu token not being in the testnet, you will have to use my test token to purchase the shiba tickets on the demo site. <br/>Just go to import a token and put this contract address in ( 0x8C7190802Ae13025adE069D2a11Eb9dF2F52A071 ) and you will see Levy Test Token. Just import that and then click the button below to get some LTT (Levy Test Token).</p></div>

            <div className='projects_container'>

                <div className='project_card_container' id='decentraliz lottery'>
                    <div className='project_card'>
                        <div className='project_card_image1'></div>
                        <div className='project_card_text'>
                            <p className='dlhomepagetext textwhite textcenter'>This project was created to make a fully functional decentralized crypto lottery. Including special token buring draws.</p>
                        </div>
                        <div className='dlproject_btn'>
                            <form>
                                <button type="submit" formaction="https://decentralizlottery.netlify.app" className='project_card_button'>Demo</button>
                            </form>
                            <form>
                                <button type="submit" formaction="https://github.com/Michealleverton/DecentralizLottery" className='project_card_button'>Code</button>
                            </form>
                        </div>
                        <div className='dlproject_btn'>
                            <form>
                                <button type="submit" formaction="https://lottofaucet.netlify.app/" className='project_card_button'>LTT Faucet</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='project_card_container' id='Lottery dashboard'>
                    <div className='project_card'>
                        <div className='project_card_image2'></div>
                        <div className='project_card_text textcenter'>
                            <p className='dlhomepagetext textwhite'>The second part to this project was to create a fully functional dashboard to veiw all the smart contracts data and interact with the contract like paying the winner, updating the price of the tickets, pausing ticket purchase and more.</p>
                        </div>
                        <div className='dlproject_btn'>
                            <form>
                                <button type="submit" formaction="https://decentralizlottery.netlify.app/" className='project_card_button'>Demo</button>
                            </form>
                            <form>
                                <button type="submit" formaction="https://github.com/Michealleverton/DecentralizLottery" className='project_card_button'>Code</button>
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
                                <button type="submit" formaction="https://goerli.etherscan.io/address/0x31cf2b41083003a66a2d10724956014d398d51f0#code" className='project_card_button'>One Dollar</button>
                            </form>
                            <form>
                                <button type="submit" formaction="https://goerli.etherscan.io/address/0xecc5eed8054f0a75118619203760d28d1a85b4e5#code" className='project_card_button'>Two Dollar</button>
                            </form>
                        </div>
                        <div className='dlproject_btn'>
                            <form>
                                <button type="submit" formaction="https://goerli.etherscan.io/address/0xb954343f87e77b5e846446bb1167c1e5cf35df2c#code" className='project_card_button'>Fifty Fifty</button>
                            </form>
                            <form>
                                <button type="submit" formaction="https://goerli.etherscan.io/address/0x8d4f9403f1100deb306f598d8ba26425f9139880#code" className='project_card_button'>Shiba Inu</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects