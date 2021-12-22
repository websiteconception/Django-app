import React, { useState, useEffect } from "react"
import LoginChoices from "components/dialogs/login-choices"
import SearchFilters from "components/dialogs/search-filters"

const useDialog = (dialog: string) => {
  const [ dialogComponent, setDialogComponent ] = useState(null)

  useEffect(() => {
    switch (dialog) {
      case 'LOGIN_CHOICES':
        setDialogComponent(() => <LoginChoices />)
        break
      case 'SEARCH_FILTERS':
        setDialogComponent(() => <SearchFilters />)
        break
      default:
        setDialogComponent(null)
        break
    }
  } , [ dialog ])

  return dialogComponent
}


export default useDialog