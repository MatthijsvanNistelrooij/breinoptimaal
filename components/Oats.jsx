import React from "react"

const Oats = () => {
  return (
    <section className="max-container mb-24">
      <hr
        style={{
          border: "none",
          borderTop: "2px solid #ccc",
          margin: "25px 0",
          opacity: 0.7,
        }}
      />
      <div className="flex flex-col lg:flex-row gap-4 p-4 lg:p-0 mt-20">
        <div className="lg:min-w-[350px] p-4 pl-4 text-3xl font-bold">
          Eiwit Oats
        </div>
        <div className="fw-full lg:min-w-[800px] p-4">
          Door tijdsgebrek is het voor velen van ons een uitdaging een voedzaam
          ontbijt klaar te maken. Upfront Eiwit Oats biedt de oplossing.
          Havervlokken, wei-eiwitten, zaden, pitten, een beetje suiker en
          specerijen, de Upfront eiwit oats bevatten alleen ingrediënten die je
          wel kent. Door deze te mengen met heet water heb je direct een
          compleet ontbijt met een geweldige smaak. Tienduizenden van jullie
          bouwen inmiddels iedere ochtend op de Upfront oats. Voeg je liever
          zelf nog fruit & noten toe? Kies dan voor de basis variant.
        </div>
      </div>
    </section>
  )
}

export default Oats
