/** Field Desk application root: a paper-toned, local-only workbench with an indexed rail. */
import { Toaster } from "@/components/ui/sonner"; import { TooltipProvider } from "@/components/ui/tooltip"; import ErrorBoundary from "./components/ErrorBoundary"; import { ThemeProvider } from "./contexts/ThemeContext"; import Home from "./pages/Home";
function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster richColors position="top-center" /><Home /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
export default App;
