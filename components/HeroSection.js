export default function HeroSection() {
  return (
    <div className="first-content">
      <h1> 
        Tyler Le <br /> 
        <em> Portfolio </em>

      </h1>

      <div className="description-container">
        <p className="desc-tag-current">
          Third-year Data Science undergraduate @ UF <br /> 
          Undergraduate Research Assistant @ 
          <a href="https://www.gatorglaciology.com/" target="_blank" rel="noopener noreferrer"> Gator Glaciology Lab  </a> <br />
          Campus Ambassador @ 
          <a href="https://www.perplexity.ai/comet" target="_blank" rel="noopener noreferrer"> Perplexity Comet  </a> <br />
        </p>

        <p className="desc-tag-past">
          Previous Data Analyst @
          <a href="https://singaporeblockchain.org/" target="_blank" rel="noopener noreferrer"> Blockchain Association Singapore </a> <br />
        </p>
      </div>
    </div>
  )
}