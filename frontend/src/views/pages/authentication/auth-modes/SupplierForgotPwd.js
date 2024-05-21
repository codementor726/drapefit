import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

import GenS3Link from 'utils/GenS3Link';
import DFnewImgTag from 'utils/DFnewImgTag';
import AuthWrapper from '../AuthWrapper';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthSupplierForgotPwd from '../auth-forms/AuthSupplierForgotPwd';

const Logo = GenS3Link('landing/images/logo_full');

const SupplierForgotPwd = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthWrapper className="sign admin">
      <Grid container direction="column" justifyContent="flex-end">
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 0 }}>
                    <DFnewImgTag
                      src={`${Logo}.webp`}
                      fallback={`${Logo}.png`}
                      height="40"
                      lzheight={40}
                      alt="Drape Fit"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ margin: '-10px 0 -20px' }}>
                    <Grid
                      container
                      direction={matchDownSM ? 'column-reverse' : 'row'}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color="#232f3e" gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            Forgot your password?
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container alignItems="center" xs={12}>
                      <Typography sx={{ lineHeight: '1.75', marginTop: '1em' }}>
                        No worries. Just enter the email address that you signed up with to reset your password.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthSupplierForgotPwd />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container alignItems="center" xs={12}>
                      <Typography sx={{ lineHeight: '1.75' }}>Remember password?&nbsp;</Typography>
                      <Typography
                        component={Link}
                        to="/dfsupplier/login"
                        variant="subtitle1"
                        style={{ textDecoration: 'underline' }}
                      >
                        Sign in
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default SupplierForgotPwd;
