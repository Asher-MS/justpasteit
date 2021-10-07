import React from 'react'
import './Modal.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  border:'50px',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'var(--bg-color)',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({id, open, children, onClose }) {
  if (!open) return null;
  console.log(id);
  var url = `https://justpasteit.herokuapp.com/${id}`;
  const notify = () => toast("Link Copied📋");
  return (
    <>
    <ToastContainer
position="bottom-center"
autoClose={1000}
hideProgressBar={true}
newestOnTop={true}
closeOnClick
pauseOnFocusLoss
draggable
pauseOnHover
/>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>

      <div className="modalTitle">
          <h1>Share it on Social Media📱</h1>
          </div>
          <div className="textarea_exp">
    <div className="link">{url}</div>
    </div>

    <div className="modalbutton">
        <button className="end-buttons close-btn" onClick={onClose}>Close</button>

        <CopyToClipboard text={url}>
  <button onClick={notify} className="end-buttons copy-btn" >Copy</button>
</CopyToClipboard>

     
        {/* <button onClick={()=>{
                  window.open("https://www.facebook.com/sharer/sharer.php?u=","facebook-share-dialog","width=800,height=600")

              }} 
              className="end-buttons share-btn">
                  Share
              </button>

              <button onClick={()=>{
                  window.open( "https://twitter.com/intent/tweet?text=Check%20this%20out%20" ,
              "Twitter",
              "width=800,height=600")

              }} 
              className="end-buttons tweet-btn">
                  Tweet
              </button> */}
              </div>
              

      </div>
    </>
  )
    // document.getElementById('portal')
  
}