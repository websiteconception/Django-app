import styled from "styled-components"
import useDialog from "hooks/use-dialog"
import React, { FC, ReactNode, ReactElement, Component } from "react"
import { connect } from "react-redux"
import { closeModal } from "action-creators/modal"
import { ModalAction } from "types/actions"
import { StoreState, ModalReducerState } from "types/reducers"

interface IProps {
  modal?: string,
  open?: boolean,
  children?: ReactNode,
  closeModal: () => ModalAction
}

const StyledModal = styled.dialog`
  padding: 0;
  z-index: 4;
  width: 100vw;
  border: none;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: var(--transparent);

  .overlay {
    width: 100%;
    height: 100%;
    opacity: 0.8;
    position: absolute;
    background-color: var(--blackolive);
  }

  .modal {
    border-radius: 6px;
    position: relative;
    box-sizing: border-box;
    background-color: var(--licorice);
    box-shadow: 0px 12px 15px var(--darkgray);
  }

  .close-button__container {
    width: 48px;
    height: 48px;
    position: absolute;
  }

  .close-modal__button {
    margin: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    background-color: var(--transparent);
  }

  .icon-close {
    color: var(--white);
  }


  @media screen and (min-width: 1440px) {
    .modal {
      width: 524px;
      height: 650px;
    }

    .close-button__container {
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (min-width: 1920px) {
    .modal {
      width: 724px;
      height: 880px;
    }

    .icon-close {
      font-size: 1.25rem;
    }
  }
`


const Modal: FC<IProps> = ({
  open,
  modal,
  closeModal,
}) => {
  const Dialog = useDialog(modal)
  const handleCloseModalClick = () => closeModal()

  return open && (
    <StyledModal>
      <div  className="overlay">
      </div>
      <div className="modal">
        <label className="close-button__container">
          <i className="icon-close"></i>
          <input
            type="button"
            className="close-modal__button"
            onClick={handleCloseModalClick}
          />
        </label>
        { Dialog }
      </div>
    </StyledModal>
  )
}

const mapStateToProps = ({ modal: { modal, open } }: StoreState):
  ModalReducerState => ({
    modal,
    open,
})

const mapDispatchToProps = {
  closeModal,
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal)