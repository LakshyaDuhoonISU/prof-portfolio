export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  logo: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-jpmorgan',
    name: 'Software Engineering Virtual Experience',
    issuer: 'JPMorgan Chase & Co.',
    issueDate: 'December 2023',
    credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_ZzZSX2rWdLDSL69yx_1733116487338_completion_certificate.pdf',
    logo: 'JPM',
  },
  {
    id: 'cert-hackerrank-sql',
    name: 'SQL (Intermediate) Certificate',
    issuer: 'HackerRank',
    issueDate: '2024',
    credentialUrl: 'https://www.hackerrank.com/certificates/9995319ddf80',
    logo: 'HR',
  },
  {
    id: 'cert-hackerrank-ps',
    name: 'Frontend Developer (React) Certificate',
    issuer: 'HackerRank',
    issueDate: '2024',
    credentialUrl: 'https://www.hackerrank.com/certificates/b40462690393',
    logo: 'HR',
  },
  {
    id: 'cert-aws-cloud-essentials-badge',
    name: 'AWS Knowledge: Cloud Essentials - Training Badge',
    issuer: 'Credly',
    issueDate: 'Feb 2025',
    credentialUrl: 'https://www.credly.com/badges/1a17a920-2053-46ea-8063-2a27ed481dec/public_url',
    logo: 'AWS',
  },
  {
    id: 'cert-aws-cloud-practitioner',
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS',
    issueDate: 'Feb 2025',
    credentialUrl: '/aws_cloud_practitioner_essentials.pdf',
    logo: 'AWS',
  },
  {
    id: 'cert-aws-technical-essentials',
    name: 'AWS Technical Essentials',
    issuer: 'AWS',
    issueDate: 'Feb 2025',
    credentialUrl: '/aws_technical_essentials.pdf',
    logo: 'AWS',
  },
];
