"use client"

import type React from "react"

interface IPortraitSectionProps {
  backgroundImage?: string
  tagline?: string
  mainQuote?: string
  secQuote?: string
  subQuote?: string
}

export const PortraitSection: React.FC<IPortraitSectionProps> = ({
  backgroundImage = "/images/login-portrait.png",
  tagline = "All you want. Just one decision.",
  mainQuote = "It's not about the look —",
  secQuote = "it's the decision you make to be seen.",
  subQuote = "Fyn is here to help you stand by your choices confidently and without compromise.",
}) => {
  return (
    <div className="portrait-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="portrait-overlay">
        <div className="portrait-content">
          <p className="tagline">{tagline}</p>
          <div className="quote-section">
            <h1 className="main-quote">{mainQuote}</h1>
            <h2 className="sec-quote">{secQuote}</h2>
            <p className="sub-quote">{subQuote}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
