import Main from '../../components/main'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import * as dogActions from '../../actions/dog'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(dogActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Main)