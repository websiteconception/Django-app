import { Component } from "react"
import { connect } from "react-redux"
import { openToastr } from "action-creators/toastr"
import { OpenToastrActionCreator } from "types/action-creators"

interface IProps {
  openToastr: Function,
}

class ErrorBoundary extends Component<IProps> {
  componentDidCatch(error: Error) {
    const { openToastr } = this.props
    openToastr(error.message, 'error')
  }

  render() {
    const { children } = this.props
    return (
      children
    )
  }
}

interface IDispatchProps {
  openToastr: OpenToastrActionCreator,
}

const mapDispatchToProps = {
  openToastr,
}

export default connect<null,IDispatchProps>(
  null, mapDispatchToProps)(ErrorBoundary)