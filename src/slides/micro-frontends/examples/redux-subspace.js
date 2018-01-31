export const child = `
const ExampleMicroFrontend = ({ myValue, accountId }) => (
  <p>{accountId}: {myValue}</p>
)

const mapStateToProps = (state) => ({
  myValue = state.myValue
  accountId = state.accountId
})

export default connect(mapStateToProps)(ExampleMicroFrontend)
`.trim()

export const reducer = `
import { SET_MY_VALUE } from './actions'
const initialValue = {
  myValue: 42
}

export exampleReducer = (state = initialValue, action) => {
  if (action.type === SET_MY_VALUE) {
    return { ...state, myValue: action.value }
  }

  return state
}
`.trim()

export const parent = `
import { SubspaceProvider } from 'react-redux-subspace'
import ExampleMicroFrontend from '@ioof/example-micro-frontend'

const MicroFrontendWrapper = ({ product }) => (
  <SubspaceProvider
    mapState={(state) => state.subApps.exampleMicroFrontend}
    namespace='example'
  >
    <ExampleMicroFrontend />
  </SubspaceProvider>
)
`.trim()

export const store = `
import { createStore, combineReducers } from 'redux'
import { applyMiddleware, namespaced } from 'redux-subspace'
import wormhole from 'redux-subspace-wormhole'
import { exampleReducer } from '@ioof/example-micro-frontend'
import { account } from './reducers

const reducer = combineReducers({
  account,
  subApps: combineReducers({
    exampleMicroFrontend: namespaced('example')(exampleReducer)
  })
})

const store = createStore(reducer, applyMiddleware({
  wormhole((state) => state.member.accountId, 'accountId')
}))
`.trim()

export const state = `
{
  member: {
    accountId = 'WDV12345678'
  },
  subApps: {
    exampleMicroFrontend: {
      myValue: 42
    }
  }
}
`.trim()
