import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaFileUpload, FaMapMarkerAlt } from "react-icons/fa";
import {
  BsCaretRightSquare,
  BsFillEmojiSmileFill,
  BsFillImageFill,
  BsFlagFill,
  BsGiftFill,
  BsThreeDots,
} from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

const PostModal = ({ showModal, setShowModal, onSubmit }) => {
  const [textareaValue, setTextareaValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const textareaRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);
  const [inputStr, setInputStr] = useState("");

  useEffect(() => {
    if (showModal) {
      textareaRef.current.focus();
    }
  }, [showModal]);

  const onEmojiClick = (emoji) => {
    setInputStr((prevInputStr) => prevInputStr + emoji.emoji);
    setShowPicker(false);
  };

  const handleTextareaChange = (e) => {
    setInputStr(e.target.value);
    setTextareaValue(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    onSubmit(textareaValue, selectedFile);

    setTextareaValue("");
    setSelectedFile(null);

    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <div className="text-center">Create Post</div>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formTextarea">
            <textarea
              rows={3}
              ref={textareaRef}
              value={inputStr || textareaValue}
              onChange={handleTextareaChange}
              placeholder="What's on your mind?"
              style={{
                border: "none",
                width: "100%",
                outline: "none",
                height: "200px",
              }}
            />
          </Form.Group>

          <div className="d-flex me-2 border-1 w-100 p-2 border rounded">
            <Form.Group>
              <div className="d-flex align-items-center">
                <label htmlFor="uploadPhoto">
                  Add your post
                  <BsFillImageFill size={24} className="post-modal-icon ms-2" />
                </label>
                <Form.Control
                  type="file"
                  id="uploadPhoto"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
            </Form.Group>

            <Form.Group>
              <div className="d-flex align-items-center">
                <label htmlFor="uploadVideo">
                  <BsCaretRightSquare size={24} className="post-modal-icon" />
                </label>
                <Form.Control
                  type="file"
                  id="uploadVideo"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
            </Form.Group>

            <Form.Group>
              <div className="d-flex align-items-center">
                <label>
                  <FaMapMarkerAlt size={24} className="post-modal-icon" />
                </label>
                <Form.Control style={{ display: "none" }} />
              </div>
            </Form.Group>

            <Form.Group>
              <div
                className="d-flex align-items-center"
                onClick={() => setShowPicker(true)}
              >
                <label>
                  <BsFillEmojiSmileFill size={24} className="post-modal-icon" />
                </label>
                {showPicker && (
                  <div>
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                  </div>
                )}
              </div>
            </Form.Group>

            <Form.Group>
              <div className="d-flex align-items-center">
                <label>
                  <BsGiftFill size={24} className="post-modal-icon" />
                </label>
                <Form.Control style={{ display: "none" }} />
              </div>
            </Form.Group>

            <Form.Group>
              <div className="d-flex align-items-center">
                <label>
                  <BsThreeDots size={24} className="post-modal-icon" />
                </label>
                <Form.Control style={{ display: "none" }} />
              </div>
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" className="w-100" onClick={handleSubmit}>
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostModal;
