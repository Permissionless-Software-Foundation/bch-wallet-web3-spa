/*
  A footer section for the SPA
*/

// Global npm libraries
import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Local libraries
import config from '../../config'
// import Memo from './get-cid'

function Footer (props) {
  // const [ipfsCid, setIpfsCid] = useState(config.ipfsCid)
  const wallet = props.appData.wallet

  // Retrieve the most up-to-date CID for the app on Filecoin from the BCH blockchain.
  useEffect(() => {
    async function fetchData () {
      try {
        // const hash = await getUpdatedUrl(wallet)
        // if (hash) {
        //   setIpfsCid(hash)
        // }
      } catch (err) {
        console.error('Error trying to retrieve Filecoin CID for the app from the BCH blockchain.')
      }
    }
    fetchData()
  }, [wallet])

  return (
    <Container style={{ backgroundColor: '#ddd' }}>
      <Row style={{ padding: '25px' }}>
        <Col>
          <h6>Source Code</h6>
          <ul>
            <li>
              <a href={config.ghRepo} target='_blank' rel='noreferrer'>GitHub</a>
            </li>

          </ul>
        </Col>

        <Col />
      </Row>
    </Container>
  )
}

// async function getUpdatedUrl (wallet) {
//   try {
//     // Exit if the wallet is not initialized.
//     if (!wallet) return

//     // Initialize the memo library for retrieving data from the BCH blockchain.
//     const memo = new Memo({ bchAddr: config.appBchAddr })
//     await memo.initialize(wallet)
//     const hash = await memo.findHash()

//     if (!hash) {
//       console.error(
//         `Could not find IPFS hash in transactions for address ${config.appBchAddr}`
//       )
//       return false
//     }
//     // console.log(`latest IPFS hash: ${hash}`)

//     return hash
//   } catch (err) {
//     console.log('Error in getUpdatedUrl(): ', err)
//   }
// }

export default Footer
