import { fireEvent, render, screen } from '@testing-library/react-native';

import { Welcome } from './Welcome';

// Mock expo-router
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
}));

describe('Welcome component', () => {
  describe('Render method', () => {
    it('should render the welcome text', () => {
      render(<Welcome />);

      const title = screen.queryByText('Welcome to React Native');
      expect(title).toBeVisible();
    });

    it('should render the subtitle', () => {
      render(<Welcome />);

      const subtitle = screen.queryByText(
        'Your modern React Native boilerplate is ready!',
      );
      expect(subtitle).toBeVisible();
    });

    it('should render the features list', () => {
      render(<Welcome />);

      const expoSdk = screen.queryByText('⚡ Expo SDK 50');
      const typescript = screen.queryByText('🔧 TypeScript support');
      const nativewind = screen.queryByText('🎨 NativeWind (Tailwind CSS)');

      expect(expoSdk).toBeVisible();
      expect(typescript).toBeVisible();
      expect(nativewind).toBeVisible();
    });

    it('should render the get started button', () => {
      render(<Welcome />);

      const button = screen.queryByText('Get Started');
      expect(button).toBeVisible();
    });

    it('should handle button press', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      render(<Welcome />);

      const button = screen.getByText('Get Started');
      fireEvent.press(button);

      expect(consoleSpy).toHaveBeenCalledWith('Button pressed!');
      consoleSpy.mockRestore();
    });
  });
});
