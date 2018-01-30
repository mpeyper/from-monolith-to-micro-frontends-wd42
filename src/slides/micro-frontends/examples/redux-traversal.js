export const child = `
import { traverse } from '@ioof/redux-traversal'
import { ACCOUNT_ID } from '@ioof/redux-traversal-constants'

export const EXAMPLE_ROOT = 'EXAMPLE_ROOT'

const ExampleMicroFrontend = ({ myValue, accountId }) => (
  <p>{accountId}: {myValue}</p>
)

const mapStateToProps = (state) => ({
  myValue = traverse(state, EXAMPLE_ROOT)
  accountId = traverse(state, ACCOUNT_ID)
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

export const store = `
import { createStore, combineReducers } from 'redux'
import { exampleReducer } from '@ioof/example-micro-frontend'
import { traversal, account } from './reducers

const reducer = combineReducers({
  traversal,
  account,
  subApps: combineReducers({
    exampleMicroFrontend: exampleReducer
  })
})

const store = createStore(reducer)
`.trim()

export const state = `
{
  traversal: {
    [ACCOUNT_ID]: 'member.accountId'
    [EXAMPLE_ROOT]: 'subApps.exampleMicroFrontend
  },
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

export const problem = `
const exampleState = traverse(state, EXAMPLE_ROOT)

const nestedChildState = traverse(state, EXAMPLE_ROOT).path.to.NESTED_CHILD_ROOT
`.trim()