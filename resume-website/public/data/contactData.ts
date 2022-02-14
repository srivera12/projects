interface ContactData { 
  contactType: string; 
  contactLink: string; 
  contactText: string; 
} 

const contactData: ContactData[] = [ 
  { 
    contactType: 'Email', 
    contactLink: 'mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website', 
    contactText: 'sarahkrivera@gmail.com', 
  }, 
  { contactType: 'GitHub', contactLink: 'https://github.com/srivera12', contactText: 'srivera12' }, 
  { contactType: 'LinkedIn', contactLink: 'https://www.linkedin.com/in/sarahkrivera/', contactText: 'Sarah Rivera' }, 
]; 

export default contactData; 
