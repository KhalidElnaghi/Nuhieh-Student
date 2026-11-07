'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { paths } from 'src/paths';

import Iconify from 'src/components/iconify';
import AuthFooter from 'src/components/auth-footer';

// ----------------------------------------------------------------------

const LAST_UPDATED = 'February 12, 2026';

// ----------------------------------------------------------------------

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Stack spacing={1.5}>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {children}
    </Stack>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
      {children}
    </Typography>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
      {items.map((item) => (
        <Typography
          key={item}
          component="li"
          variant="body2"
          sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 0.5 }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------

export default function PrivacyPolicyView() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          minHeight: '100vh',
          py: 6,
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 720,
            bgcolor: 'white',
            p: { xs: 3, md: 5 },
            mb: { xs: 6, md: 8 },
          }}
        >
          <Stack spacing={3}>
            {/* Back link */}
            <Link
              component={RouterLink}
              href={paths.auth.jwt.login}
              color="inherit"
              variant="subtitle2"
              sx={{
                alignItems: 'center',
                display: 'inline-flex',
              }}
            >
              <Iconify icon="eva:arrow-ios-back-fill" width={16} />
              Back to Login
            </Link>

            {/* Title */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Privacy Policy
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled', mt: 1 }}>
                Last updated: {LAST_UPDATED}
              </Typography>
            </Box>

            <Divider />

            {/* Introduction */}
            <Section title="1. Introduction">
              <Paragraph>
                We are committed to protecting your privacy and ensuring the security of your
                personal and operational information. This Privacy Policy outlines how we collect,
                use, disclose, and safeguard your data when you access or interact with our
                administrative dashboard, web applications, and associated services (collectively,
                the &quot;Platform&quot;).
              </Paragraph>
              <Paragraph>
                By accessing or using the Platform, you acknowledge that you have read and agree to
                the data practices described in this policy. If you do not agree with any terms of
                this Privacy Policy, please discontinue access and use of our services immediately.
              </Paragraph>
            </Section>

            {/* Information We Collect */}
            <Section title="2. Information We Collect">
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 1 }}>
                2.1 Personal Information
              </Typography>
              <Paragraph>
                When you create an account, authenticate, or use features on the Platform, we may collect:
              </Paragraph>
              <BulletList
                items={[
                  'Name, work email address, and contact details',
                  'Job title, role, and organization or department information',
                  'Account authentication credentials and access privileges',
                  'Profile image or avatar (if provided)',
                ]}
              />

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 1 }}>
                2.2 Operational and Organization Data
              </Typography>
              <Paragraph>
                Depending on your organization&apos;s configuration and use of the Platform, we process
                business and operational records entered by authorized team members, which may include:
              </Paragraph>
              <BulletList
                items={[
                  'Management records, scheduling, and project tasks',
                  'Staff directories, resource assignments, and administrative metrics',
                  'Billing statements, service receipts, and financial transaction records',
                  'Operational audit trails and activity timelines',
                ]}
              />

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 1 }}>
                2.3 Usage & Technical Data
              </Typography>
              <Paragraph>
                We automatically gather technical telemetry when you interact with the Platform:
              </Paragraph>
              <BulletList
                items={[
                  'IP address, browser type, operating system, and device metadata',
                  'Pages visited, features utilized, and navigation pathways',
                  'Error diagnostics, crash reports, and system performance metrics',
                  'Authentication timestamps and active session durations',
                ]}
              />
            </Section>

            {/* How We Use Your Information */}
            <Section title="3. How We Use Your Information">
              <Paragraph>Collected information is utilized strictly for lawful operational purposes, including:</Paragraph>
              <BulletList
                items={[
                  'Delivering, operating, and maintaining the core platform capabilities',
                  'Managing identity verification, role-based authorization, and account security',
                  'Processing transactions and generating administrative and analytic reports',
                  'Delivering essential security notifications, operational updates, and support messages',
                  'Diagnosing system errors, fixing bugs, and improving user experience and performance',
                  'Maintaining compliance with applicable laws, industry standards, and regulatory obligations',
                  'Providing timely customer service and technical assistance',
                ]}
              />
            </Section>

            {/* Data Security */}
            <Section title="4. Data Security">
              <Paragraph>
                We implement robust, industry-standard administrative, physical, and technical safeguards to
                protect your data from unauthorized access, alteration, or disclosure, such as:
              </Paragraph>
              <BulletList
                items={[
                  'Strong encryption standards for data in transit (TLS 1.2+) and data at rest',
                  'Strict role-based access control (RBAC) ensuring least-privilege access principles',
                  'Regular automated security scanning and vulnerability reviews',
                  'Secure session management with token-based authentication and automatic session expiry',
                  'Immutable audit logging of critical operational and administrative actions',
                ]}
              />
              <Paragraph>
                While we continuously employ best-in-class security practices, no method of transmission over
                the Internet or electronic storage is completely impenetrable. We encourage all users to
                maintain strong credentials and protect their login access.
              </Paragraph>
            </Section>

            {/* Data Sharing */}
            <Section title="5. Data Sharing and Disclosure">
              <Paragraph>
                We do not sell, rent, or monetize your personal or organization data to advertisers or third
                parties. We share data only under strictly regulated conditions:
              </Paragraph>
              <BulletList
                items={[
                  'With your registered organization and designated administrators',
                  'With vetted technical service providers (e.g., cloud hosting, database infrastructure) bound by strict confidentiality and data protection agreements',
                  'When required by valid legal orders, subpoena, or applicable regulatory mandates',
                  'To protect the vital safety, rights, and property of our users and the public',
                ]}
              />
            </Section>

            {/* Data Retention */}
            <Section title="6. Data Retention">
              <Paragraph>
                We retain account and operational information for as long as your organization&apos;s account remains
                active or as necessary to fulfill the business purposes for which it was gathered. We also retain
                and use records to satisfy legal, tax, accounting, or regulatory requirements, and to resolve
                disputes.
              </Paragraph>
            </Section>

            {/* Your Rights */}
            <Section title="7. Your Rights">
              <Paragraph>
                Subject to applicable data protection laws, you and your organization may have the right to:
              </Paragraph>
              <BulletList
                items={[
                  'Access and receive a copy of your personal data held in our systems',
                  'Request rectification of inaccurate, outdated, or incomplete details',
                  'Request erasure of personal data, subject to lawful retention requirements',
                  'Request data portability in a structured, commonly used, machine-readable format',
                  'Object to or restrict specific forms of data processing',
                  'Withdraw previously granted consent at any time',
                ]}
              />
              <Paragraph>
                To exercise any applicable data privacy rights, please reach out through our designated support
                channels.
              </Paragraph>
            </Section>

            {/* Cookies */}
            <Section title="8. Cookies and Storage Technologies">
              <Paragraph>
                The Platform uses strictly necessary cookies and local storage tokens solely to maintain authenticated
                sessions, enforce security, and preserve your customized interface preferences (such as language and
                theme direction). We do not deploy behavioral tracking or third-party marketing cookies.
              </Paragraph>
            </Section>

            {/* Children */}
            <Section title="9. Children&apos;s Privacy">
              <Paragraph>
                The Platform is strictly built for authorized professional, enterprise, and administrative use. It is
                not intended for or directed toward individuals under the age of 18, and we do not knowingly solicit
                or collect information from minors.
              </Paragraph>
            </Section>

            {/* Changes */}
            <Section title="10. Changes to This Privacy Policy">
              <Paragraph>
                We may periodically update this policy to reflect enhancements in our services or changes in
                statutory standards. Revised policies will be published on this page with an updated &quot;Last updated&quot;
                date. Continued use of the Platform after changes are posted represents your acknowledgment of the
                revisions.
              </Paragraph>
            </Section>

            {/* Contact */}
            <Section title="11. Contact Us">
              <Paragraph>
                If you have questions, inquiries, or feedback regarding this Privacy Policy or our information security
                practices, please contact our administrative team at:
              </Paragraph>
              <BulletList
                items={[
                  'Email: support@example.com',
                ]}
              />
            </Section>
          </Stack>
        </Card>
      </Box>

      <AuthFooter />
    </>
  );
}
