<template>
  <section>
    <svg id="scroll-svg" width="100%" height="600" style="border: 1px solid black"></svg>
  </section>
</template>
<script setup lang="ts">
import * as d3 from 'd3'
import { onMounted } from 'vue'
const imagesData = [
  { img: 'ukraine-map.png', x: 0, y: 0, width: 100, height: 80, added: false }, 
  { img: 'ukrainian-cuisine.png', x: 60, y: 30, width: 10, height: 10, added: false },
  { img: 'ukrainian-writing-and-language.png', x: 20, y: 40, width: 10, height: 10, added: false }
]

// Select SVG
const svg = d3.select('#scroll-svg')

// Function to add image node at a specific position
function addImageNode(image: any) {
  const node = d3.select('#scroll-svg')
  node
    .append('image')
    .attr('xlink:href', `src/assets/${image.img}`)
    .attr('x', `${image.x}`)
    .attr('y', `${image.y}`)
    .attr('width', `${image.width}%`)
    .attr('height', `${image.height}%`)
    .attr('opacity', 0)
    .transition()
    .duration(1000)
    .attr('opacity', 1)
}

const addTextToSvg = () => {
  const svg = d3.select('#scroll-svg')

  // Add a text element to the SVG
  svg
    .append('text')
    .attr('x', 50)
    .attr('y', 100)
    .attr('font-size', '24px')
    .attr('fill', 'black')
    .text('Hello, D3.js and Vue Composition API!')

  // Add more text with different styles
  svg
    .append('text')
    .attr('x', 50)
    .attr('y', 150)
    .attr('font-size', '18px')
    .attr('fill', 'blue')
    .attr('font-family', 'Arial')
    .style('font-weight', 'bold')
    .text('This is dynamic text using D3 and Vue!')
}

onMounted(() => {
//   addTextToSvg()
  imagesData.forEach((item) => {
    addImageNode(item)
  })
})
</script>
