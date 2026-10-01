/**
 * Content Card block – authoring-only configuration container.
 * It renders no visible content and is hidden on and after load, so it never
 * appears on the published site. The authored configuration is consumed from
 * the node, so nothing is written back to the DOM here.
 */

export default function decorate(block) {
  // Managed hiding: clear all authored markup and keep the block out of the layout.
  block.textContent = '';
  block.setAttribute('aria-hidden', 'true');
  block.hidden = true;
}
