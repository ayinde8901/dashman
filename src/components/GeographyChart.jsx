import { useTheme } from "@emotion/react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../scenes/Theme"; 
import { geoFeatures } from "../Data/MockGeographyData";  // Import only available exports

const GeographyChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme?.palette?.mode) || { grey: { 100: "#cccccc" } };

    // Define mock data if it is not available in the module
    const data = [
        { id: "USA", value: 500000 },
        { id: "CAN", value: 300000 },
        // Additional data points as needed
    ];

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <ResponsiveChoropleth
                data={data}
                theme={{
                    axis: {
                        domain: {
                            line: { stroke: colors.grey[100] }
                        },
                        legend: { text: { fill: colors.grey[100] } },
                        ticks: {
                            line: { stroke: colors.grey[100], strokeWidth: 1 },
                            text: { fill: colors.grey[100] }
                        }
                    },
                    legends: { text: { fill: colors.grey[100] } }
                }}
                features={geoFeatures.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionScale={isDashboard ? 40 : 150}
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[isDashboard ? 0.49 : 0.5, 0.5, 0]}
                projectionType="mercator" // Add this line
                borderWidth={1.5}
                borderColor="#ffffff"
                legends={
                    !isDashboard
                        ? [
                              {
                                  anchor: "bottom-left",
                                  direction: "column",
                                  justify: true,
                                  translateX: 20,
                                  translateY: -100,
                                  itemsSpacing: 0,
                                  itemWidth: 94,
                                  itemHeight: 18,
                                  itemDirection: "left-to-right",
                                  itemTextColor: "#444444",
                                  itemOpacity: 0.85,
                                  symbolSize: 18,
                                  effects: [
                                      {
                                          on: "hover",
                                          style: {
                                              itemTextColor: "#000000",
                                              itemOpacity: 1
                                          }
                                      }
                                  ]
                              }
                          ]
                        : undefined
                }
            />
        </div>
    );
};

export default GeographyChart;
