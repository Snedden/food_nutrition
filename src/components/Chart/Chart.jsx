import React, { createContext, useContext } from "react"
import { dimensionsPropsType } from "./utils"

import "./Chart.css"

const ChartContext = createContext()
export const useChartDimensions = () => useContext(ChartContext)

const Chart = ({ dimensions, children }) => (
    <ChartContext.Provider value={dimensions}>
        {/*//Todo Makes width as dimensions.width*/}
        <svg className="Chart" width={300} height={dimensions.height}>
            <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
                { children }
            </g>
        </svg>
    </ChartContext.Provider>
)

Chart.propTypes = {
    dimensions: dimensionsPropsType
}

Chart.defaultProps = {
    dimensions: {}
}

export default Chart
