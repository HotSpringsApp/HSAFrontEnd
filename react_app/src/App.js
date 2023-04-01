import sample_data from './lib/sample_data.json';

import Title from './components/title_test';
import Footer from './components/footer_test';
import SingleSpring from './components/singleSpring';

const App = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <div>
        <Title />
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-1">
        {sample_data.map(spring => 
          <SingleSpring 
            key={spring._id}
            spring={spring}
          />
        )}
      </div>
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
