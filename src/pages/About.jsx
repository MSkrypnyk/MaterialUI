import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const About = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ maxWidth: "300px", maxHeight: "300px" }}
          src="https://express-pizza.if.ua/media/1698703952_119.webp"
          alt="pizza"
        />
        <img
          style={{ maxWidth: "300px", maxHeight: "300px" }}
          src="https://express-pizza.if.ua/media/1698703873_892.webp"
          alt="pizza"
        />
        <img
          style={{ maxWidth: "300px", maxHeight: "300px" }}
          src="https://express-pizza.if.ua/media/1698704248_756.webp"
          alt="pizza"
        />
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography style={{margin: '10px', fontSize: '25px', fontWeight: 'bold' }}>
              Sure, here's an interesting description of a pizza in English: The
              Gourmet's Delight - Truffle Mushroom Pizza
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{margin: '10px', fontSize: '20px' }}>
              Crust: A crispy yet airy thin crust, hand-stretched to perfection.
              Sauce: Velvety white truffle cream sauce infused with earthy
              mushroom essence. Cheese: Generous layers of melted mozzarella and
              aged Parmesan, creating a harmonious blend of flavors. Toppings:
              Delicately sautéed wild mushrooms, including porcini, shiitake,
              and oyster varieties, sprinkled with fresh thyme leaves. Finishing
              Touches: Drizzled with truffle oil for an extra burst of aroma and
              decadence.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography style={{margin: '10px', fontSize: '25px', fontWeight: 'bold' }}>Description:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{margin: '10px', fontSize: '20px' }} >
              Indulge in the epitome of luxury with our Truffle Mushroom Pizza.
              Every bite is a symphony of flavors, from the earthy notes of the
              mushrooms to the richness of the truffle cream sauce. The
              combination of melted cheeses and aromatic truffle oil elevates
              this pizza to a gourmet experience. Savor the essence of the
              forest with each slice of this culinary masterpiece. Perfect
              Pairing: Enjoy with a glass of crisp Chardonnay or a light Pinot
              Noir to complement the earthy flavors of the mushrooms and
              truffle.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography style={{margin: '10px', fontSize: '25px', fontWeight: 'bold' }}>Description:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography style={{margin: '10px', fontSize: '20px' }}>
                Sure, here's an interesting description of a pizza in English:
                The Gourmet's Delight - Truffle Mushroom Pizza Crust: A crispy
                yet airy thin crust, hand-stretched to perfection. Sauce:
                Velvety white truffle cream sauce infused with earthy mushroom
                essence. Cheese: Generous layers of melted mozzarella and aged
                Parmesan, creating a harmonious blend of flavors. Toppings:
                Delicately sautéed wild mushrooms, including porcini, shiitake,
                and oyster varieties, sprinkled with fresh thyme leaves.
                Finishing Touches: Drizzled with truffle oil for an extra burst
                of aroma and decadence. Description: Indulge in the epitome of
                luxury with our Truffle Mushroom Pizza. Every bite is a symphony
                of flavors, from the earthy notes of the mushrooms to the
                richness of the truffle cream sauce. The combination of melted
                cheeses and aromatic truffle oil elevates this pizza to a
                gourmet experience. Savor the essence of the forest with each
                slice of this culinary masterpiece. Perfect Pairing: Enjoy with
                a glass of crisp Chardonnay or a light Pinot Noir to complement
                the earthy flavors of the mushrooms and truffle. Feel free to
                modify and expand upon this description to suit your preferences
                or creative vision! Adjust the ingredients, toppings, and
                flavors to craft your own unique and mouthwatering pizza
                description.
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
