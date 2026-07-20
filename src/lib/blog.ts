export const POSTS = [
  {
    slug: 'packers-movers-charges-bangalore-guide',
    title: 'What Affects Packers and Movers Charges in Bangalore?',
    description: 'Understand the main factors behind a moving estimate and how to compare quotes more clearly.',
    date: 'July 10, 2026',
    category: 'Pricing',
    intro: 'A reliable moving quote is based on more than the distance between two addresses. Inventory, access and packing requirements can change the crew size, materials, vehicle and time needed.',
    sections: [
      { heading: 'The six main cost factors', text: 'The volume of belongings, route distance, floor and lift access, packing materials, vehicle size and optional services usually have the greatest impact on the total.' },
      { heading: 'Why a survey matters', text: 'Photos, a video survey or an in-person survey help the moving team identify bulky furniture, fragile items and difficult access before moving day.' },
      { heading: 'Compare the scope, not just the total', text: 'Check whether packing, dismantling, loading, unloading, tolls and taxes are included. A lower total may exclude work you still need.' },
    ],
  },
  {
    slug: 'moving-day-checklist-bangalore',
    title: 'A Practical Moving Day Checklist',
    description: 'Prepare documents, essentials and access details before the moving crew arrives.',
    date: 'July 4, 2026',
    category: 'Planning',
    intro: 'A little preparation before the crew arrives keeps important items separate and reduces avoidable delays at both properties.',
    sections: [
      { heading: 'Pack an essentials bag', text: 'Keep medicines, chargers, keys, identification, basic toiletries and one change of clothes with you rather than in the moving vehicle.' },
      { heading: 'Confirm building access', text: 'Inform security, reserve service lifts where required and check vehicle parking at both the pickup and destination addresses.' },
      { heading: 'Photograph valuable items', text: 'Take clear condition photos of electronics, furniture and appliances before packing, and back up important data from computers.' },
    ],
  },
  {
    slug: 'how-to-pack-fragile-items',
    title: 'How Fragile Household Items Should Be Packed',
    description: 'Simple packing principles for glassware, electronics, artwork and other delicate belongings.',
    date: 'June 28, 2026',
    category: 'Packing',
    intro: 'Fragile items need the right combination of cushioning, movement control, strong outer packaging and clear labelling.',
    sections: [
      { heading: 'Match materials to the item', text: 'Glassware needs individual wrapping and dividers, while electronics benefit from anti-static protection and firm cushioning around the device.' },
      { heading: 'Remove empty space', text: 'Items break when they can move inside a box. Fill voids without overpacking, and use boxes that can support the weight.' },
      { heading: 'Label by handling need and room', text: 'Mark fragile cartons on multiple sides and include the destination room so they can be placed correctly during unloading.' },
    ],
  },
] as const;

export function getPost(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}
