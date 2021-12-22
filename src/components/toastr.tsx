import { connect } from "react-redux"
import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"
import { StoreState, ToastrReducerState } from "types/reducers"

interface IStyledProps {
  top?: string,
  left?: string,
  right?: string,
  bottom?: string,
  isLogin?: boolean,
}

interface IProps {
  open: boolean,
  message: string,
  toastrType: string,
  top?: string,
  left?: string,
  right?: string,
  bottom?: string,
  isLogin?: boolean,
  children?: ReactNode,
}

const StyledToastr = styled.div`
  padding: 10px;
  border-radius: 2px;
  position: absolute;
  font-family: ModeratRegular;
  box-shadow: 4px 4px 15px 2px black;
  top: ${({ top }:IStyledProps):string => top ? top : '25px'};
  left: ${({ left }:IStyledProps):string => left ? left : 'unset'} ;
  bottom: ${({ bottom }:IStyledProps):string => bottom ? bottom : 'unset'} ;


  @media screen and (min-width:144px) and (max-width: 1023px){
    right: ${({ right }:IStyledProps):string => right ? right : '25px'} ;
  }

  @media screen and (min-width: 1024px) {
    right: ${({ right, isLogin }:IStyledProps):string => {
      if (isLogin){
        return right ? right : 'calc(50vw + 25px)'
      }

      return right ? right : '25px'
    }} ;
  }

  &.open {
    display: flex;
  }

  &.closed {
    display: none;
  }

  &.loading {
    background-color: var(--primary);
  }

  &.success {
    background-color: var(--green);
  }

  &.error {
    background-color: var(--crimson);
  }
`

const Toastr: FC<IProps> = ({
  top,
  open,
  left,
  right,
  bottom,
  isLogin,
  message,
  toastrType,
}) : ReactElement | null => (
  ( open &&
    <StyledToastr
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      isLogin={isLogin}
      className={toastrType}
    >
      { message }
    </StyledToastr>
  ) || null
)

const mapStateToProps = ({ toastr } : StoreState): ToastrReducerState => ({
  open: toastr.open,
  message: toastr.message,
  toastrType: toastr.toastrType,
})

export default connect(mapStateToProps)(Toastr)