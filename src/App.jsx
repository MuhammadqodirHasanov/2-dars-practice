import { imgNoutbuk } from "./assets";
import { Card } from "./Components";
import { Layout } from "./Layout/layuot";

function App() {
  return (
      <Layout sitebar>
        <Card 
          title="Keyboard" 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nesciunt suscipit doloremque blanditiis perspiciatis, quae saepe commodi dolores consectetur, totam eos, minus quaerat repellendus et? Ullam iusto quibusdam culpa officiis."
          img={imgNoutbuk}
        />
        <Card 
          title="Keyboard" 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nesciunt suscipit doloremque blanditiis perspiciatis, quae saepe commodi dolores consectetur, totam eos, minus quaerat repellendus et? Ullam iusto quibusdam culpa officiis."
          img={imgNoutbuk}
        />
      </Layout>
  );
}

export { App }
