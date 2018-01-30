export const parent = `
import { ThemeProvider } from '@ioof/react-theme-provider'
import ExampleMicroFrontend from '@ioof/example-micro-frontend'

const MicroFrontendWrapper = ({ product }) => (
  <ThemeProvider theme={themes[product]}>
    <ExampleMicroFrontend />
  </ThemeProvider>
)
`.trim()

export const child = `
import { themed } from '@ioof/react-theme-provider'

const ExampleMicroFrontend = ({ theme }) => (
  <button style={{ backgroundColor: theme.primary }}>Click Me!</button>
)

export default themed(ExampleMicroFrontend)
`.trim()