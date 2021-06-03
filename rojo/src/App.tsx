import styled from 'styled-components';
import { LayoutExample } from './components/layout/LayoutExample';
import { LoadersExample } from './components/Loaders.tsx/LoadersExample';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <Box>
       <LayoutExample/>
       <LoadersExample/>
       </Box>
    </div>
  );
}

export default App;
