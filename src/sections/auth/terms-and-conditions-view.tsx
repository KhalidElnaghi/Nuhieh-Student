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

export default function TermsAndConditionsView() {
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
                Terms & Conditions
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled', mt: 1 }}>
                Last updated: {LAST_UPDATED}
              </Typography>
            </Box>

            <Divider />

            {/* Agreement */}
            <Section title="1. Agreement to Terms">
              <Paragraph>
                These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of this
                administrative platform, web applications, and related services (&quot;Platform&quot;).
                By accessing or using the Platform, you agree to be bound by these Terms. If you do not
                agree to these Terms, you must not use or access the Platform.
              </Paragraph>
              <Paragraph>
                These Terms apply to all users of the Platform, including account holders, administrative
                operators, and authorized personnel (&quot;Users&quot;).
              </Paragraph>
            </Section>

            {/* Eligibility */}
            <Section title="2. Eligibility and Account Registration">
              <Paragraph>
                To access and use the Platform, you must:
              </Paragraph>
              <BulletList
                items={[
                  'Be at least 18 years of age and legally capable of entering into binding contracts',
                  'Be an authorized representative or employee of a registered organization',
                  'Provide true, accurate, current, and complete registration information',
                  'Maintain the confidentiality and security of your account authentication credentials',
                ]}
              />
              <Paragraph>
                You are responsible for all activities conducted under your credentials. You must
                promptly report any suspected security breach or unauthorized access to our support team.
              </Paragraph>
            </Section>

            {/* Authorized Use */}
            <Section title="3. Authorized Use">
              <Paragraph>
                We grant you a limited, non-exclusive, non-transferable, and revocable license to access and
                use the Platform solely for lawful business, management, and administrative purposes within
                your authorized scope. You agree to use the Platform for intended operations, such as:
              </Paragraph>
              <BulletList
                items={[
                  'Managing organizational workflows, operations, and records',
                  'Accessing dashboards, analytics, and operational metrics',
                  'Managing team members, resources, and access privileges',
                  'Processing transactions and generating operational reports',
                  'Administering user accounts and security settings',
                ]}
              />
            </Section>

            {/* Prohibited Use */}
            <Section title="4. Prohibited Activities">
              <Paragraph>
                When using the Platform, you agree NOT to:
              </Paragraph>
              <BulletList
                items={[
                  'Access or use the Platform for any illegal or unauthorized purpose',
                  'Share your credentials with unauthorized individuals or third parties',
                  'Attempt unauthorized access to other user accounts, networks, or databases',
                  'Transmit viruses, trojans, worms, or any malicious or destructive code',
                  'Decompile, reverse-engineer, or disassemble any portion of the Platform software',
                  'Engage in unauthorized data extraction, automated scraping, or data mining',
                  'Interfere with or compromise system integrity, availability, or server infrastructure',
                  'Resell, sublicense, lease, or commercially exploit access to the Platform',
                ]}
              />
            </Section>

            {/* Data Ownership */}
            <Section title="5. Data Ownership and Compliance">
              <Paragraph>
                All data, materials, and records entered or uploaded into the Platform remain the exclusive
                property of you and your organization. You represent that you have all necessary rights,
                consents, and legal authorizations to upload and process such information through the Platform.
              </Paragraph>
              <Paragraph>
                We process your organization&apos;s data strictly as an authorized data processor in accordance
                with your operational instructions and our Privacy Policy.
              </Paragraph>
            </Section>

            {/* Intellectual Property */}
            <Section title="6. Intellectual Property">
              <Paragraph>
                The Platform, including all underlying source code, design systems, interface architecture,
                graphics, icons, and software components, is protected by copyright, trademark, and intellectual
                property laws. Except as explicitly authorized in writing, you may not copy, modify, distribute,
                or reproduce any part of the Platform.
              </Paragraph>
            </Section>

            {/* Service Availability */}
            <Section title="7. Service Availability and Maintenance">
              <Paragraph>
                We strive to maintain continuous service availability; however, we do not guarantee uninterrupted
                or completely error-free operation. We reserve the right to:
              </Paragraph>
              <BulletList
                items={[
                  'Conduct scheduled or emergency system maintenance and platform updates',
                  'Enhance, optimize, or adjust features to improve platform stability and security',
                  'Temporarily suspend access for accounts involved in violations of these Terms',
                ]}
              />
            </Section>

            {/* Fees */}
            <Section title="8. Fees and Subscriptions">
              <Paragraph>
                Access to the Platform may be subject to subscription or license fees agreed upon in your
                service agreement. Pricing terms, billing schedules, and payment obligations are governed by
                the commercial agreements between your organization and the service provider.
              </Paragraph>
            </Section>

            {/* Limitation of Liability */}
            <Section title="9. Limitation of Liability">
              <Paragraph>
                To the fullest extent permitted by applicable law, the service provider, its affiliates,
                officers, directors, and employees shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including loss of profits, data, goodwill, or operational
                downtime arising from your use or inability to use the Platform.
              </Paragraph>
            </Section>

            {/* Disclaimer */}
            <Section title="10. Disclaimer of Warranties">
              <Paragraph>
                The Platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis without
                warranties of any kind, either express or implied, including warranties of merchantability,
                fitness for a particular purpose, and non-infringement.
              </Paragraph>
            </Section>

            {/* Termination */}
            <Section title="11. Termination">
              <Paragraph>
                We may suspend or terminate your account access if you fail to comply with these Terms. Upon
                termination, your right to access the Platform will immediately cease, and your data will be
                handled or exported according to our data retention protocols and applicable agreements.
              </Paragraph>
            </Section>

            {/* Governing Law */}
            <Section title="12. Governing Law">
              <Paragraph>
                These Terms shall be governed by and construed in accordance with applicable laws without regard
                to conflict of law principles. Any dispute arising under these Terms shall be resolved in the
                competent courts of the governing jurisdiction.
              </Paragraph>
            </Section>

            {/* Changes */}
            <Section title="13. Changes to These Terms">
              <Paragraph>
                We reserve the right to revise these Terms at our discretion. Notice of substantial revisions
                will be posted on this page with an updated revision date. Your continued use of the Platform
                following any changes constitutes binding acceptance of the updated Terms.
              </Paragraph>
            </Section>

            {/* Contact */}
            <Section title="14. Contact Information">
              <Paragraph>
                For questions, clarifications, or notices regarding these Terms and Conditions, please contact us:
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
